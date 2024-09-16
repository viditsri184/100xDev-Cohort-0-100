const express  = require("express");
const port = 4000;
const app = express();

// to read data from the body
app.use(express.json());

// a in memory variable acting as a source of database for us
const users = [{
    name : "John",
    numberOfKidney : 2,
    kidneys : [{
        left : false
    }, {
        right : true
    }],
    age : 33
}, {
    name : "Bob",
    numberOfKidney : 2,
    kidneys : [{
        left : true
    }, {
        right : false
    }],
    age : 35
}, {
    name : "Dev",
    numberOfKidney : 2,
    kidneys : [{
        left : false
    }, {
        right : false
    }],
    age : 43
}, {
    name : "Jake",
    numberOfKidney : 1,
    kidneys : [{
        left : false
    }],
    age : 32
}, {
    name : "Haul",
    numberOfKidney : 1,
    kidneys : [{
        right : false
    }],
    age : 48
}, {
    name : "Nile",
    numberOfKidney : 2,
    kidneys : [{
        left : true
    }, {
        right : true
    }],
    age : 15
}, {
    name : "Hero",
    numberOfKidney : 0,
    kidneys : [],
    age : 39
}];

// console.log(users[3].kidneys[0].right)

// a helper function to display details of the users
const displayDetails = ()=>{
    for(let i = 0 ; i < users.length ; i++){
        console.log(`Name : ${users[i]["name"]}`);
        console.log(`Age : ${users[i]["age"]}`);
        console.log(`Number of kidney : ${users[i]["numberOfKidney"]}`)
        if(users[i]["kidneys"][0]["left"] === false){
            console.log(`LEFT : Unhealthy`);
        }
        else{
            console.log(`LEFT : Healthy`);
        }
        if(users[i]["kidneys"][1]["right"] === false){
            console.log(`RIGHT : Unhealthy`);
        }
        else{
            console.log(`RIGHT : Healthy`);
        }
    }
}

// helper function to get basic info of the users
const getInfo = ()=>{
    let res = users.map((user) => {
        const name = user.name;
        const age = user.age;
        const numberOfKidney = user.numberOfKidney;
        // Count healthy and unhealthy kidneys based on the actual kidney status
        const healthyKidney = user.kidneys.filter(kidney => Object.values(kidney)[0] === true).length;
        const unHealthyKidney = user.kidneys.filter(kidney => Object.values(kidney)[0] === false).length;
        let leftKidney = null;
        let rightKidney = null;
        user.kidneys.forEach((kidney) => {
            if(kidney.hasOwnProperty('left')) {
                leftKidney = kidney.left === true ? "Healthy" : "UnHealthy";
            }
            if(kidney.hasOwnProperty('right')) {
                rightKidney = kidney.right === true ? "Healthy" : "UnHealthy";
            }
        });
        return {
            name, age, numberOfKidney, healthyKidney,
            unHealthyKidney, leftKidney, rightKidney
        };
    });
    return res;
}

// endpoint to get all the info of the patients
app.get('/', (req, res) => {
    // show all the records of the patients
    let result = getInfo();
    res.json(result);
});

// endpoint to add kidney to existing user
app.post('/add', (req, res) => {
    // get the user who want's to add the kidney
    const userName = req.body.userName;
    // get the status of the kidney being added
    const isHealthy = req.body.isHealthy;
    // get the target user from the users array
    let target = users.find(user => user.name === userName);
    if (!target) {
        return res.status(404).json({ msg: "User not found!" });
    }
    // get the number of kidney currently the user has
    let numberOfKidney = target.numberOfKidney;
    // if it is less than 2, allow to add more
    if(numberOfKidney == 0){
        target.kidneys.push({left : isHealthy});
        target.kidneys.push({right : isHealthy});
        target.numberOfKidney = 2;
        res.json({msg : "Kidney added successfully!"});
    }
    else if(numberOfKidney == 1){
        if(target.kidneys[0].hasOwnProperty('right')){
            target.kidneys.push({
                left : isHealthy
            });
        }
        else{
            target.kidneys.push({
                right : isHealthy
            });
        }
        // update the kidney count
        target.numberOfKidney = 2;
        // just to confirm send a msg
        res.json({msg : "Kidney added successfully!"});
    }
    // if already has 2, then don't allow to add more
    else{
        res.status(411).json({
            msg : "Already have 2 kidneys, cannot add more!"
        });
    }
});

// endpoint to replace existing unhealthy kidney's with a good one
app.put('/replace', (req, res) => {
    // get the user who want's to add the kidney
    const userName = req.body.userName;
    // get the user from the users array
    let target = users.find(user => user.name === userName);
    if (!target) {
        return res.status(404).json({ msg: "User not found!" });
    }
    // get the number of kidney currently the user has
    let numberOfKidney = target.numberOfKidney;
    if(numberOfKidney == 0){
        res.status(411).json({
            msg : "You have 0 kidney currently, kindly add some kidney first!"
        });
    }
    else if(numberOfKidney == 1){
        if(target.kidneys[0].hasOwnProperty('right')){
            target.kidneys[0].right = true;
        }
        else{
            target.kidneys[0].left = true;
        }
        res.json({msg : "Kidney successfully replaced!"});
    }
    // if he has 2 kidneys
    else{
        target.kidneys[0].left = true;
        target.kidneys[1].right = true;
        res.json({msg : "Kidney successfully replaced!"});
    }
});

// endpoint to delete unhealthy kidneys from the patient
app.delete('/delete', (req, res) => {
    const userName = req.body.userName;
    // get the user from the users array
    let target = users.find(user => user.name === userName);
    if (!target) {
        return res.status(404).json({ msg: "User not found!" });
    }

    if (target.numberOfKidney < 1) {
        return res.status(411).json({ msg: "You have no kidneys left to remove!" });
    }

    if (atleastOneUnhealthyKidney(target)) {
        target.kidneys = target.kidneys.filter(kidney => Object.values(kidney)[0] === true);
        target.numberOfKidney = target.kidneys.length;
        return res.json({ msg: "Successfully removed the unhealthy kidney!" });
    } else {
        return res.status(411).json({ msg: "No unhealthy kidney to remove!" });
    }
});

// helper function to determine if the target user has atleast one unhealthy kidney or not
const atleastOneUnhealthyKidney = (user) => {
    return user.kidneys.some(kidney => Object.values(kidney)[0] === false);
};

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});