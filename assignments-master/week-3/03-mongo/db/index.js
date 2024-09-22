const mongoose = require('mongoose');


require('dotenv').config();
const dbURI = process.env.MONGODB_URI
    .replace('${MONGODB_USERNAME}', process.env.MONGODB_USERNAME)
    .replace('${MONGODB_PASSWORD}', process.env.MONGODB_PASSWORD);
// Connect to MongoDB
mongoose.connect(dbURI);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : {type : String, },
    password : String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : Course
    }],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    imageLink : String,
    price : Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}