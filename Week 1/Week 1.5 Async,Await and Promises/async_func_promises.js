const fs = require('fs');

// one ugly way to create asynchronous fn of our own
// function viditReadsFile(cb){
//     fs.readFile("file.txt", "utf-8", (err, data) =>{
//         cb(data);
//     })
// }
// console.log("hello");
// callback function to call
// function onDone(data){
//     console.log(data);
// }

// viditReadsFile(onDone);

// console.log("wello");


// cleaner way to create async func of our own using promises

function viditReadsTheFile(){
    console.log("inside viditreadsfile");
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile("file.txt", "utf-8", (err, data) =>{
            console.log("before resolve");
            resolve(data);
        });
    })
}

// callback function to call
function onDone(data){
    console.log(data);
}

let a = viditReadsTheFile();
console.log(a);
a.then(onDone);