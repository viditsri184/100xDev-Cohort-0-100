// giving type to a variable by defining it
let x: number = 1;
console.log(x);

// Problem 1 - Hello world
// adding type specific arguments
function greet(name:string){
    console.log("Hello " + name);
}
greet("Vidit");


// type inference, ts understands it already that adding two numbers
// will give always a number, but still its a good practice to
// explicitly tell what type of output you want

// Problem 2 - Sum function
// explicitly adding that this function returns a specified type
function sum(a : number, b : number) : number{
    return a + b;
    // return "asdfaf"; error
}

const value = sum(1, 2);
console.log(value);

// Problem 3 - Return true or false based on if a user is 18+
// type inference used here!
function isLegal(age : number){
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}
// even we didn't explicitly said that the result will be boolean,
// but due to type inference of ts it automatically assigns the
// result as boolean
// {hover over isLegal below to see that..}
console.log(isLegal(19));

//Problem 4 -
// Create a function that takes another function as input, and runs it after 1 second.
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})