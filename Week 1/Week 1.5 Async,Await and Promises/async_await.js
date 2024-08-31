function viditAsyncFunction(){
    let p = new Promise(function(resolve){
        // do some async logic here
        setTimeout(function(){
            resolve("hi there1!");
        }, 3000);
    });
    return p;
}

async function main(){
    // no callabcks, no .then syntax needed now
    // viditAsyncFunction().then(function(value){
    //     console.log(value);
    // })
    let value = await viditAsyncFunction();
    console.log("Hi there!");
    console.log(value);
}

main();
console.log("After main!");