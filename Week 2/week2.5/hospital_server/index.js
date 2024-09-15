const express  = require("express");
const port = 4000;
const app = express();

app.use(express.json());

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

const getInfo = ()=>{
    let res = users.map((user) => {
        const name = user.name;
        const age = user.age;
        const numberOfKidney = user.numberOfKidney;
        const healthyKidney = user.kidneys.filter(kidney => Object.values(kidney)[0] === true).length;
        const unHealthyKidney = numberOfKidney - healthyKidney;
        let leftKidney = null;
        let rightKidney = null;
        user.kidneys.forEach((kidney) =>{
            if(kidney.hasOwnProperty('left') && kidney.hasOwnProperty('right')){
                leftKidney = user.kidneys[0].left === true ? "Healthy" : "UnHealthy";
                rightKidney = user.kidneys[1].right === true ? "Healthy" : "UnHealthy";
            }
            else{
                if(kidney.hasOwnProperty('left')){
                    leftKidney = user.kidneys[0].left === true ? "Healthy" : "UnHealthy";
                }
                else if(kidney.hasOwnProperty('right')){
                    rightKidney = user.kidneys[0].right === true ? "Healthy" : "UnHealthy";
                }
            }
        })
        return {
            name, age, numberOfKidney, healthyKidney,
            unHealthyKidney, leftKidney, rightKidney
        };
    });
    return res;
}

app.get('/', (req, res) => {
    // show all the records of the patients
    let result = getInfo();
    res.json(result);
});

app.post('/add', (req, res) => {
    // user can add a new kidney
    // get the user who want's to add the kidney
    const userName = req.body.userName;
    // get the status of the kidney being added
    const isHealthy = req.body.isHealthy;
    // get the user from the users array
    let target = users.filter((user)=>{
        return user.name === userName;
    });
    // get the number of kidney currently the user has
    let numberOfKidney = target[0].numberOfKidney;
    // if it is less than 2, allow to add more
    if(numberOfKidney == 0){
        target[0].kidneys.push({left : isHealthy});
        target[0].kidneys.push({right : isHealthy});
        target[0].numberOfKidney = 2;
        res.json({msg : "Kidney added successfully!"});
    }
    else if(numberOfKidney == 1){
        // keep adding until it becomes 2
        if(target[0].kidneys[0].hasOwnProperty('right')){
            target[0].kidneys.push({
                left : isHealthy
            });
        }
        else{
            target[0].kidneys.push({
                right : isHealthy
            });
        }
        // update the kidney count
        target[0].numberOfKidney = 2;
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

app.put('/replace', (req, res) => {
    // get the user who want's to add the kidney
    const userName = req.body.userName;
    // get the user from the users array
    let target = users.filter((user)=>{
        return user.name === userName;
    });
    // get the number of kidney currently the user has
    let numberOfKidney = target[0].numberOfKidney;
    if(numberOfKidney == 0){
        res.status(411).json({
            msg : "You have 0 kidney currently, kindly add some kidney first!"
        });
    }
    else if(numberOfKidney == 1){
        let kidney = target[0].kidneys[0].left;
        if(target[0].kidneys[0].hasOwnProperty('right')){
            target[0].kidneys[0].right = true;
        }
        else{
            kidney = true;
        }
        res.json({
            msg : "Kidney successfully replaced!"
        });
    }
    else{
        target[0].kidneys[0].left = true;
        target[0].kidneys[1].right = true;
        res.json({
            msg : "Kidney successfully replaced!"
        });
    }
});

app.delete('/delete', (req, res) => {
    const userName = req.body.userName;
    // get the user from the users array
    let target = users.filter((user)=>{
        return user.name === userName;
    });
    // get the number of kidney currently the user has
    let numberOfKidney = target[0].numberOfKidney;
    if(numberOfKidney < 1){
        res.status(411).json({msg : "You have no kidneys left to remove!"});
    }
    else{
        if(atleastOneUnhealthyKidney() && numberOfKidney == 1){
            let res = target[0].kidneys.filter((kidney) => {
                return kidney === true;
            });
            target[0].kidneys = res;
            res.json({msg : "Successfully removed the unhealthy kidney!"});
        }
        else if(atleastOneUnhealthyKidney()){
            let res = target[0].kidneys.filter((kidney) => {
                return kidney === true;
            });
            target[0].kidneys = res;
            res.json({msg : "Successfully removed the unhealthy kidney!"});
        }
        else{
            res.status(411).json({msg : "No un-healthy kidney to remove!"});
        }
    }
});

const atleastOneUnhealthyKidney = () => {
    let atleastOneUnhealthyKidney = false;
    users.forEach((user) => {
        user.kidneys.forEach((kidney) => {
            if(kidney === false){
                atleastOneUnhealthyKidney = true;
            }
        });
    });
    return atleastOneUnhealthyKidney;
}

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});