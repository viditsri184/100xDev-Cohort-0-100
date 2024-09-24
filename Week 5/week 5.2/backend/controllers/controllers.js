const express = require("express");
new express().use(express.json());
const {createTodo, updatedTodo, deletedTodo} = require("../types");
const todo = require("../db/db");

// normal getTodo endpoint function
const getAllTodos = async (req, res) => {
    try {
        let data = await todo.find({});
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(404).send("Internal server error");
    }
}

// post request function to create new todos
const putNewTodo = async (req, res) => {
    const userPayload = req.body;

    const parsePayload = createTodo.safeParse(userPayload);
    if(!parsePayload.success){
        return res.status(411).json({msg : "Invalid input"});
    }
    try {
        await todo.create({
            id: userPayload.id,
            title: userPayload.title,
            description: userPayload.description,
            completed: false
        });
        res.status(201).json({msg : "New todo created successfully"});
    } catch (error) {
        console.log(error);
        res.status(404).send("Internal server error");
    }
}

// put request function to update/insert new todos
const updateTodo = async (req, res) => {
    const userPayload = req.body;
    const id = userPayload.id;
    const parsePayload = updatedTodo.safeParse({id});
    if(!parsePayload.success){
        return res.status(411).json({msg : "Invalid input"});
    }
    try {
        const updatedTodo = await todo.findOneAndUpdate({id: id}, {$set: {
            title: userPayload.title,
            description: userPayload.description,
            completed: userPayload.completed
        }});
        if(!updatedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        }
        res.json({msg : "updated todo successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(404).send("User doesn't exist");
    }
}

const deleteTodo = async(req, res) => {
    const userId = parseInt(req.query.id);
    const parseId = deletedTodo.safeParse(userId);
    if(!parseId.success){
        return res.status(404).json({msg: "User not found"});
    }
    try {
        await todo.findOneAndDelete({id: userId});
        res.status(200).json({msg : "User deleted successfully"});
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

module.exports = {
    getAllTodos,
    putNewTodo,
    updateTodo,
    deleteTodo
};