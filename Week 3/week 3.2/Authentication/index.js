/*

Authentication can be done in various ways :

1. Hashing - 1 WAY ONLY
2. Encryption - 2 WAY
3. JWT - JSON Web Token {by generating tokens}
4. Local Storage

---------------------------------------------------------------------------------
* Hashing -> It is a process through which a simple text/string is converted into
some complex random text with a bunch of mixing of alpha-numeric and special symbols

It is a one way process since once the password is hashed through hashing, there's no
way to get back the original password back from the hashed string.

---------------------------------------------------------------------------------

* Encryption -> It is the process of converting normal text into cipher text using
some encryption algorithm and private/public keys

Decryption -> It's just the opposite of encryption

Example : Facebook uses this process, whenever we send any data to it, it firsts encrypt
that data and then save it to the database, and whenever we want to access that data. 
facebook decrypts it and gave us back the original data.


    plain text ----encryption----> cipher text -----decryption-----> plain text

---------------------------------------------------------------------------------

* JWT -> It is a very important and standard procedure in the industry. It is neither
hashing nor encryption. It is not the most secure one too but still used widely since
it helps to minimize the number of calls to the database.
It is more like a digital signature.
Like anyone can see the real contents, if they get the token.
But only the one having password, can verify the signature.

It consists of basically three parts :
1. JSON -> JavaScript Object notation, simple a json object consisting our details
2. Web -> Since it is used in web apis
3. Token -> A very important term, it is created by the backend of the server and
is created only when the user login / signin into any site.

Tokens are generally nothing just a random long string which is made by using the
jwt library of the node.js

Basically, when we go to any site for the first time, we do a sign in there, with our
username and password with bunch of other stuffs.

After this a call is made to the backend server with our username and password,
now this username and password is saved to the database of that application/site

After this the backend gives us back a token in response, which is now send back everytime
when we go to any authenticated endpoint and not the actual username and pass

{username, password} ----jwtPassword--> Signature -----jwtPassword----> {username, password}

------------------------------------------------------------------------------------------
We can understand through this as an example.
Like we go to the twitter page and login/signup for the first time, then we get back token
and it is saved into our local storage {we will see that how ..further}

Now we use twitter fluently after that, make posts, read post, etc without logging
everytime back even when we are hitting different authentication endpoints /readpost,
/makepost etc.

Why ? because everytime our token is being passed as an header specifically an authorization
header and this token is used to verify that if we are real user or not by a jwt password
which is defined secretly somewhere in the database.
---------------------------------------------------------------------------------------
Now the process can be explained better through code probably :

const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
---------------------------------------------------------------------------------------
now the below line creates a token with field username only.
why not password? remember if someone gets our token we are very much screwed and he can
just take our token go to jwt.io and just decode our token there and get
back the id and password. Thus we always only send username in the token

const token = jwt.sign({username : username}, jwtPassword);

in the above line we used the jwtPassword, to create the token. Now this password is
defined in the backend and is kept in a secure other place and not openly like this.
--------------------------------------------------------------------------------------
const decoded = jwt.verify(token, jwtPassword);

now this line is used to decode back the token into the json object we passed through
while creating our token i.e {username : "username"}
Here also we used the same jwtPassword to verify the token.
Thus the password used to create and verify the token is very important.

--------------------------------------------------------------------------------------
Let's start by creating a website which has 2 endpoints

POST - route - "/signin"
Body - {
username : string
password : string
}

Returns a json web token with username encrypted

GET - route - "/user"
Headers -
Authorization header

Returns an array of all users if user is signed in (token is correct)
Return 403 status code if not
*/

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const port = 4000;
const app = express();
app.use(express.json());

// in-memory database
const ALL_USERS = [
    {
        username : "vidit@gmail.com",
        password : "123",
        name : "Vidit Srivastava",
    },
    {
        username : "roy@gmail.com",
        password : "12121",
        name : "Roy Singh",
    },
    {
        username : "julia@gmail.com",
        password : "123321",
        name : "Julia Den",
    },
    {
        username : "Rohna@gmail.com",
        password : "12111",
        name : "Rohan Sharma",
    },
    {
        username : "ayush@gmail.com",
        password : "321131",
        name : "Ayush kumar",
    }
];


// write logic to return true or false if this user exists in ALL_USERS array
function userExists(username, password){
    const userExist = ALL_USERS.find((user) => user.username === username);
    const passExist = ALL_USERS.find((user) => user.password === password);
    // if any of them is undefined
    if(!userExist || !passExist){
        return false;
    }
    // else return true
    return true;
}

// console.log(userExists("julia@gmail.com", "123321"));

// an authenticated endpoint to sign in using username and password
app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg : "User doesn't exist in our in-memory database"
        });
    }

    // here we create the token and place username in the token, we create it
    // by using the jwtPassword we have defined above
    const token = jwt.sign({username : username}, jwtPassword);
    // return the token
    return res.json({
        token
    });
});


// a simple endpoint to display details of the user
app.get("/user", (req, res) => {
    // get the token from the header
    const token = req.headers.authorization;
    try{
        // decoding the token back gives us the original JSON object
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
        let list = ALL_USERS.filter((user) => {
            return user.username != username;
        });
        res.status(200).json(list);
    }catch(error){
        return res.status(404).json({msg : "Invalid token"});
    }
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

/*
Authentication Recap :
-> JWT (JSON web tokens) to create tokens
-> User gets back a token after sign in request
-> User saves this token in its localStorage/Cookies
-> User sends back tokens in all authenticated requests
*/