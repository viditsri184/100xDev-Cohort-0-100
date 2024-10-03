const mongoose = require("mongoose");
const argon2 = require("argon2");

require('dotenv').config({ path: './db/.env' });
const dbURI = process.env.MONGODB_URI
    .replace('${MONGODB_USERNAME}', process.env.MONGODB_USERNAME)
    .replace('${MONGODB_PASSWORD}', process.env.MONGODB_PASSWORD);
// Connect to MongoDB
mongoose.connect(dbURI);

// Create a Schema for Users
const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    password_hash: {
        type: String,
        required: true,
        minLength: 6
    }
});

// Method to generate Hash from plain text  using argon2
UserSchema.methods.createHash = async function(plainTextPassword){
    // return password hash
    return await argon2.hash(plainTextPassword);
}

// Method to validate the entered password using argon2
UserSchema.methods.validatePassword = async function(candidatePassword){
    return await argon2.verify(this.password_hash, candidatePassword);
}


// Create a model from the schema
const Users = mongoose.model('User', UserSchema);


// Note - We are not hashing passwords before putting them in the database.
// This is standard practice that should be done, you can find more details here
// - https://mojoauth.com/blog/hashing-passwords-in-nodejs/





module.exports = Users;