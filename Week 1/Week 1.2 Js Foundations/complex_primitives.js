// arrays

const personArray = ["Vidit", "Vagisha", "Mansi", "Brutus"];

personArray.forEach(element => {
    console.log(element);
});

// question 1 : Write a program to print all even numbers in an array

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0 ; i < num.length ; i++){
    if((num[i] & 1) == 0) console.log(num[i]);
}

// question 2 : Write a program to print the biggest number in an array

let arr2 = [44, 2, 3, 41, 100, 55];
let max = arr2[0];
for(let i = 1 ; i < arr2.length ; i++){
    if(arr2[i] > max){
        max = arr2[i];
    }
}
console.log("Max number : " + max);

// objects

const user1 = {
    firstName : "Vidit",
    gender : "male"
}

// question 3 : Write a program that prints all the male people's first name given a complex object
const allUsers = [{
    firstName : "Vidit",
    gender : "male"
}, {
    firstName : "Vagisha",
    gender : "female"
}, {
    firstName : "Brutus",
    gender : "male"
}]

console.log(user1.gender);

for(let i = 0 ; i < allUsers.length ; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"]);
    }
}

// question 4 : Write a program that reverses all the elements on an array

let start = 0, end = personArray.length - 1;

while(start <= end){
    let temp = personArray[start];
    personArray[start] = personArray[end];
    personArray[end] = temp;
    start++;
    end--;
}

for(let i = 0 ; i < personArray.length ; i++){
    console.log(personArray[i]);
}

