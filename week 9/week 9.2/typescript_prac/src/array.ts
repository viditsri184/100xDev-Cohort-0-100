// Example 1
// Given an array of positive integers as input, return the maximum value in the array
function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));

// Example 2
// Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User3 {
	firstName: string;
	lastName: string;
	age: number;
}

function isLegal3(arr: User3[]){
    return arr.filter((u) => u.age >= 18);
}

let filteredArr = isLegal3([
    {firstName: "vidit", lastName: "srivastava", age: 19},
    {firstName: "rohan", lastName: "sharma", age: 15},
    {firstName: "aditya", lastName: "tiwari", age: 16},
    {firstName: "akshay", lastName: "khanna", age: 22}])

console.log(filteredArr);