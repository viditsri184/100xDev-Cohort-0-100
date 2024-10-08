"use strict";
let x = 1;
console.log(x);
function greet(name) {
    console.log("Hello " + name);
}
greet("Vidit");
function sum(a, b) {
    return a + b;
}
const value = sum(1, 2);
console.log(value);
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(19));
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("hi there");
});
