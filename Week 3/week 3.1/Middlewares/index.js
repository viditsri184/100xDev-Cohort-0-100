const express = require("express");
const { listen } = require("../../../assignments-master/week-2/02-nodejs/fileServer");

const app = express();
const port = 3000;


// ugly way of doing things

// app.get("/health-checkup", (req, res)=> {
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     // one way to perform auth check and input check

//     // if the username and pass don't match
//     if(username != "vidit" || password != "pass"){
//         res.status(403).json({
//             msg : "User doesn't exist"
//         });
//         return;
//     }

//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg : "Wrong inputs"
//         });
//         return;
//     }
//     // do something with kidney here
//     res.status(200).send("Your heart is healthy");
// });



/* Introducing middlewares
Middlewares : These are nothing just normal functions used to perform two types of check
1 . Authentication check   2 . Input check
These are just user defined functions passed as a callback function to the endpoints
These functions contains three arguments req, res and a callback fn next()
req and res are usual objects of the server and are used as it is, but the next()
is used to propagate the flow of cycle to the next or neighboring function in the argument list
of the endpoint function
Ex - app.get("/route", cb1, cb2, cb3, cb4...... (req, res) => { });

these functions passed between the route and the ending functions are known as middlewares
as they act in the between middle of them to perform checks
Some common middlewares used in apis are rate-limiter() or checkNumberOfRequest();
*/


// Let's do the above job now by using the concept of middlewares

// Authentication check using middleware
const userMiddleware = (req, res, next) => {
    // getting the username and pass using the req object
    const username = req.headers.username;
    const password = req.headers.password;
    // perform the check
    if(username != "vidit" || password != "pass"){
        res.status(403).json({msg : "Incorrect inputs"});
    }else{
        // if no issues then call the next function in the list
        next();
    }
}

// Input check middleware
const kidneyMiddleware = (req, res, next) => {
    // getting the kidney id using the req object
    const kidneyId = req.query.kidneyId;
    // perform the check
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg : "Incorrect inputs"
        });
    }
    // if no issues then call the next function in the list
    else{
        next();
    }
}

// This is a more precise and cleaner way of writing checks using Middlewares

// see we pass two middlewares as a function to perform these checks
// when the check is passed the next() functions calls the next function here in the
// below argument list i.e after userMiddleware -> kidneyMiddleware will be called
// the order is decided by us.
app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    // do something with the kidney

    res.status(200).json({msg : "Your are healthy"});
});

// we do need to call the next func in the last func of the endpoint as there is
// no other function to call after this
app.get("/kidney-check", userMiddleware, kidneyMiddleware, (req, res) => {
    // do something with kidney here

    res.status(200).json({msg : "Your kidney is healthy"});
});

// here we pass only userMiddleware since in heart checkup there is no need for
// kidneyMiddleware
app.get("/heart-check", userMiddleware, (req, res) => {
    // do something with user here

    res.send("Your heart is healthy!");
});


// Last thing in middleware
// app.use(express.json())

/* app.use means specifically this use means that the middleware passed into in is going
to get called everywhere
If we know that a middleware is going to get called everywhere in every endpoint, so rather
than passing it specifically in every endpoint we can just write app.use(middleware)
and then that middleware will be called in every endpoint written after that line
Thus it's just a way to declare middlewares somewhat globally
After writing app.use(<middleware_Name>) we do not need to now add this middleware
specifically into any of the endpoints below it.
*/

/* In case of app.use(express.json()), we are still calling the function inside it
not like other middlewares just passing the name, the reason to that is -
express.json() itself returns another function thus we need to write like this inorder
to work it properly
 */

// Since i have wrote this line down here, then the above endpoints wont have
// access or this middleware passed to them already. Only the endpoints written below
// this line will have express.json() middleware already passed to them without specifying
app.use(express.json());

let numberOfRequests = 0;
function calculateRequest(req, res, next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.use(calculateRequest); // see here we only specify the middleware name and not call it actually


// in both these endpoints, then calculateRequest middleware will be passed without
// specifying them
app.post('/health-checkup', (req, res) => {

});

app.put('/health-checkup', (req, res) => {

});



app.listen(port, (req, res) => {
    console.log(`http://localhost:${port}`);
});