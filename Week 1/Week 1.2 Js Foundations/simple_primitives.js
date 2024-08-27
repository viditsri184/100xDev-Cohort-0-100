// var , let, const
let a = 2;
a = 23
console.log(a);

// data types
// strings, number, boolean

let firstName = "Vidit";
let age = 20;
let isMarried = false;

console.log("This person name is " + firstName + " and their age is " + age);


// if else

if(isMarried == true){
    console.log(firstName +" is Married!")
}
else{
    console.log(firstName + " is not Married!");
}


// loops
let answer = 0;
for(let i = 0 ; i < 1000000 ; i++){
    answer = answer + i;
}
console.log(answer);


// question 1 : Write the program to greet a person given their first and last name
let lastName = "Srivastava";
console.log("Hello " + firstName + lastName + " have a nice day!");

// question 2 : Write a program that greets a person on their gender(if else)
if(age < 18){
    console.log("Hello junior!");
}
else console.log("Hello senior!");


// question 3 : Write a program that counts from 0-1000 and prints(For loop)
for(let i = 0 ; i <= 1000 ; i++){
    console.log("counter -> " + i);
}