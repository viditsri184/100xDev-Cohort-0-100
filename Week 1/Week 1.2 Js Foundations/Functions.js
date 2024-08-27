// question 1 : Write a function that finds the sum of two numbers
function findSum(num1, num2, fnToCall){
    // do things with the input and return an output
    let result = num1 + num2;
    fnToCall(result);
}

// question 2 : Write another function that displays this result in a pretty format

function displayResult(data){
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data){
    console.log("Sum's result is : " + data);
}

// you are only allowed to call one function after this
// how will you displayResult of a sum

// answer -> using callbacks i.e passing fun as an argument to another func
const ans = findSum(21, 12, displayResult);


//////////////////////////////////////////////////////////

function calculateArithmetic(a, b, arithmeticFunc){
    // calling back the sum function as below when we pass it as an argument
    // function arithmeticFunc(a, b){
        // return a + b;
    // }
    const ans = arithmeticFunc(a, b);
    return ans;
}

function sum(a, b){
    return a + b;
}

const value = calculateArithmetic(1, 2, sum);
console.log(value);

//////////////////////////////////////////////////////////

// setTimeout
function greet(){
    console.log("Hello world");
}
// passing a function as an argument here is a callback
setTimeout(greet, 1 * 1000);