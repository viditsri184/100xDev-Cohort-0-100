const express = require("express");
new express().use(express.json());
const {User, Account} = require("../db/db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const { signUpBody, signInBody, updateBody } = require("../types");

async function signUpHandler() {
    const {success} = signUpBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({message : "Email already taken/incorrect inputs"});
    }
    
    const existingUser = await User.findOne({username : req.body.username});

    if(existingUser){
        return res.status(411).json({msg : "User already exists"});
        
    }
    const newUser = {
        username : req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    const hashedPassword = await newUser.createHash(req.body.password);
    newUser.password_hash = hashedPassword;
    const user = await User.create(newUser);
    const userId = user._id;

    // ----- Create new account ------
    await Account.create({
        userId: userId,
        balance: 1 + Math.random() * 10000
    });
    // ----------------------------------

    const token = jwt.sign(userId, JWT_SECRET);
    return res.status(201).json({message: "User created successfully", token: token});
}

async function signInHandler(){
    const {success} = signInBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({message: "Invalid input"});
    }

    const existingUser = await User.findOne({username: req.body.username});
    if(!existingUser){
        return res.status(411).json({message: "User doesn't exist"});
    }
    else{
        const token = jwt.sign(existingUser._id, JWT_SECRET);
        return res.status(200).json({token: token});
    }
}

async function userInfoUpdate(){
    const {success} = updateBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({message: "Invalid Input"});
    }
    const userId = req.userId;
    const hashedPassword = await newUser.createHash(req.body.password);
    await User.findOneAndUpdate({_id : userId}, {
        $set: {password_hash: hashedPassword, firstName: req.body.firstName, lastName: req.body.lastName}
    });

    return res.status(200).json({message: "Updated successfully"});
}

async function getUser(){
    const filter = req.query.filter || "";
    const users = await User.find({$or: [{firstName: {"$regex": filter}}, {lastName: {"$regex": filter}}]});

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