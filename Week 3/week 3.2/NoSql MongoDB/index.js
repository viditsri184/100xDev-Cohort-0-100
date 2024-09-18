// include all the important libraries
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// define the jwt pass
const jwtPassword = "123456";
const port = 5000;

// get the express object
const app = express();
// include the middleware
app.use(express.json());

// to get the username and password as environmental variable
require('dotenv').config();
const dbURI = process.env.MONGODB_URI
    .replace('${MONGODB_USERNAME}', process.env.MONGODB_USERNAME)
    .replace('${MONGODB_PASSWORD}', process.env.MONGODB_PASSWORD);

// connect to the database using the connection string
mongoose.connect(dbURI);

// define the schema and initialize the schema as model also
const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

// creates a random string of uppercase letters of a specified length
const generateRandomString = (length) =>
    Array.from({ length }, () =>
        String.fromCharCode(65 + Math.floor(Math.random() * 26))
    ).join("");


// checks whether a user exists in the database or not
async function userExists(username, password) {
    // Find the user based on the username
    const user = await User.findOne({ username: username });
    // If no user is found, return false
    if (!user) {
        return false;
    }
    // Check if the provided password matches the user's password
    const isMatch = user.password === password;
    return isMatch;
}

// signup endpoint to add user to the database
app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const isExists = await userExists(username, password);
    if(isExists){
        return res.status(403).json({
            msg : "Username already exist in our database"
        });
    }
    else{
        try {
            const person = await User.create({
                name: generateRandomString(4),
                username: username,
                password: password,
            });
            res.status(201).json(person);
        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    }
});

// sign-in endpoint to generate a token when signing in for the first time
app.post("/sign-in", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const isExists = await userExists(username, password);
    if(!isExists){
        return res.status(403).json({
            msg : "User doesn't exist in our database"
        });
    }

    const token = jwt.sign({username : username}, jwtPassword);
    res.status(200).json({
        token,
    });
});

// /users endpoint to display the user info except the username that is passed
app.get("/users", async (req, res) => {
    // get the token
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username from the database
        const data = await User.find({username : username});
        if(data){
            const allUsers = await User.find({});
            let people = allUsers.filter((user) => {
                return user.username != data[0].username;
            });
            res.status(200).json(people);
        }
    }catch(err){
        console.log(err);
        res.status(403).json({msg : "Invalid token"});
    }
});

// /remove-user endpoint to delete user from the database
app.delete("/remove-user", async (req, res) => {
    const token = req.headers.authorization;
    try{
        const decode = jwt.verify(token, jwtPassword);
        const username = decode.username;
        
        const deletedUser = await User.deleteOne({username : username});
        if(deletedUser.deletedCount > 0){
            res.status(200).json({message : "User deleted Successfully.."});
        }else{
            res.status(401).json({message : "User not found!"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error..."});
    }
});


// global catches
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(403).json({msg : "Server error"});
});

// listening the app
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});