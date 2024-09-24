const mongoose = require("mongoose");

require('dotenv').config({ path: './db/.env' });
const dbURI = process.env.MONGODB_URI
    .replace('${MONGODB_USERNAME}', process.env.MONGODB_USERNAME)
    .replace('${MONGODB_PASSWORD}', process.env.MONGODB_PASSWORD);
// Connect to MongoDB
mongoose.connect(dbURI);

// Define the Todo schema
const todoSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const todo = mongoose.model('todo', todoSchema);

module.exports = todo;