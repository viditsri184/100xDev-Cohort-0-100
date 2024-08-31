// file system module
const fs = require("fs");

// async function
// path, encoding, a callback func
fs.readFile("file.txt", "utf-8", function(err, data){
    console.log(data);
});

console.log("Hello below async func");

let a = 0;
// takes very long, longer than the file read func
// now tell which thing will be logged first ?
for(let i = 0 ; i < 1000000000 ; i++){
    a++;
}

console.log("Hi there 2");
