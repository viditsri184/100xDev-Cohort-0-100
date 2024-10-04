const mongoose = require("mongoose");
const argon2 = require("argon2");

require('dotenv').config({ path: './db/.env' });
const dbURI = process.env.MONGODB_URL
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


/*
In the real world, you shouldn't store `floats` for balances in the database.
You usually store an integer which represents the INR value with
decimal places (for eg, if someone has 33.33 rs in their account,
you store 3333 in the database).

There is a certain precision that you need to support (which for india is
2/4 decimal places) and this allows you to get rid of precision
errors by storing integers in your DB
*/
const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    balance: {
        type: Number,
        required: true,
    }
});


// Create a model from the schema
const User = mongoose.model('User', UserSchema);
const Account = mongoose.model('Account', accountSchema);

// Note - We are not hashing passwords before putting them in the database.
// This is standard practice that should be done, you can find more details here
// - https://mojoauth.com/blog/hashing-passwords-in-nodejs/


module.exports = {User, Account};