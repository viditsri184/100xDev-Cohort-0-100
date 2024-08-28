// user defined func for slice method of string
function cutIt(str, startIndex, endIndex){
    let newStr = "";
    for(let i = 0 ; i < str.length ; i++){
        if(i >= startIndex && i < endIndex){
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
let val = "Vidit Srivastava";
let ans = cutIt(val, 0, 5);
console.log("After applying functions : " + ans);


// callback stuffs
let array = [1, 2, 3];
function logInto(str){
    console.log(str);
}

array.forEach(logInto);

function log1()
{
    console.log("Hello world 1");
}

function log2(){
    console.log("Hello world 2");
}

function logWhatsPresent(fn){
    fn();
}

logWhatsPresent(log1);


// some other stuff related to date class

function calculateSum(n){
    let a = 0;
    for(let i = 0 ; i < n ; i++){
        a = a + i;
    }
    return a;
}

const beforeCall = new Date();
const beforeTimeInMs = beforeCall.getTime();
console.log(calculateSum(100));
const afterCall = new Date();
const afterTimeInMs = afterCall.getTime();

console.log("function runtime : " + (afterTimeInMs - beforeTimeInMs) + "ms");
