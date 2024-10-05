const express = require("express");
new express().use(express.json());
const mongoose = require("mongoose");
const { Account } = require("../db/db");
const {transferBody} = require("../types");

async function getBalance(req, res){
    const userId = req.userId;
    const account = await Account.findOne({
        userId: userId
    });

    res.status(200).json({balance: account.balance});
}

async function transferAmount(req, res){
    const session = await mongoose.startSession();
    session.startTransaction();

    const {success} = transferBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({message: "Invalid input"});
    }
    const senderId = req.userId;
    const amount = req.body.amount;
    // fetch the sender's account
    const sender = await Account.findOne({userId: senderId}).session(session);
    if(!sender || sender.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({message: "Insufficient balance"});
    }

    // fetch the receiver's account
    const receiver = await Account.findOne({userId: req.body.to}).session(session);
    if(!receiver){
        await session.abortTransaction();
        return res.status(400).json({message: "Invalid account"});
    }

    // Perform the transfer
    await Account.findOneAndUpdate({userId: senderId}, {$inc: {balance: -amount}}).session(session);
    await Account.findOneAndUpdate({userId: req.body.to}, {$inc: {balance: amount}}).session(session);
    
    // Commit the transaction
    await session.commitTransaction();

    return res.status(200).json({message: "Transfer successful"});
}


module.exports = {getBalance, transferAmount};