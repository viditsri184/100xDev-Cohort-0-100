const express = require("express");
new express().use(express.json());
const {User, Account} = require("../db/db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const { signUpBody, signInBody, updateBody } = require("../types");

// ------ Signup Handler ------
async function signUpHandler(req, res) {
    const {success} = signUpBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({message : "Email already taken/incorrect inputs"});
    }
    
    const existingUser = await User.findOne({username : req.body.username});

    if(existingUser){
        return res.status(411).json({msg : "User already exists"});
        
    }
    const newUser = new User({
        username : req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    const hashedPassword = await newUser.createHash(req.body.password);
    newUser.password_hash = hashedPassword;
    const user = await newUser.save();
    const userId = user._id;

    // ----- Create new account ------
    await Account.create({
        userId: userId,
        balance: 1 + Math.random() * 10000
    });
    // ----------------------------------

    const token = jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1h' });
    return res.status(201).json({message: "User created successfully", token: token});
}

// ------ Signin Handler ------
async function signInHandler(req, res){
    const {success} = signInBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({message: "Invalid input"});
    }

    const existingUser = await User.findOne({username: req.body.username});
    if(!existingUser){
        return res.status(411).json({message: "User doesn't exist"});
    }
    else{
        const validPassword = await existingUser.validatePassword(req.body.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        const token = jwt.sign({ id: existingUser._id }, JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({token: token});
    }
}

// ------ Update User Info ------
async function userInfoUpdate(req, res){
    const {success} = updateBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({message: "Invalid Input"});
    }
    const userId = req.userId;
    const existingUser = await User.findOne({_id: userId});
    // Check if the user exists
    if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
    }

    const hashedPassword = await existingUser.createHash(req.body.password);
    await User.findOneAndUpdate({_id : userId}, {
        $set: {password_hash: hashedPassword, firstName: req.body.firstName, lastName: req.body.lastName}
    });

    return res.status(200).json({message: "Updated successfully"});
}


// ------ Get Users ------
async function getUser(req, res){
    const filter = req.query.filter || "";
    // Use 'i' flag to make the regex case-insensitive
    const users = await User.find({
        $or: [
            { firstName: { "$regex": filter, "$options": "i" } },
            { lastName: { "$regex": filter, "$options": "i" } }
        ]
    });

    return res.status(200).json({
        user:users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    });
}

module.exports = {signUpHandler, signInHandler, userInfoUpdate, getUser};