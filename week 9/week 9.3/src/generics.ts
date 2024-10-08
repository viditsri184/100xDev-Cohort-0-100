// 1. Problem Statement
// Let's say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
// How would you solve this problem?

// 1 solution could be this below
type Input = number | string;
function firstEl(arr : Input[]){
    return arr[0];
}

const value = firstEl(["vidit", "srivastava"]);
// console.log(value.toUpperCase()); // error and this is the problem with the above approach
// User can send different types of values in inputs, without any type errors
// Typescript isn't able to infer the right type of the return type

// 2 Solution : Generics
// Generics enable you to create components that work with any data type while still providing compile-time type safety.

// basic generic template
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);


// Solution to the original problem :
function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
const el2 = getFirstElement([1, 2]);
const el3 = getFirstElement([true, false]);
console.log(el.toLowerCase());


