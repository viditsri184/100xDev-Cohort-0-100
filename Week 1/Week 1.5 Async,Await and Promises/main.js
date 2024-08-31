// Synchronous functions - Blocking method

function findSum(n){
    let ans = 0;
    for(let i = 0 ; i < n ; i++){
        ans = ans + i;
    }
    console.log(ans);
}

// findSum(199);


function findSumTill199(){
    return findSum(199);
}

// Asynchronous function - Non Blocking method
setTimeout(findSumTill199, 1000); // global Async function
console.log("hello world"); // this will not be blocked

// to make set timeout a synchronous func
// a dumb way -
// busy waiting
function syncSleep(){
    let a = 1;
    for(let i = 0 ; i < 10000000000 ; i++){
        a++;
    }
}
syncSleep();


