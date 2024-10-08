// Example 1
// Given an array of positive integers as input, return the maximum value in the array
function maxValue(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([1, 2, 3]));
function isLegal3(arr) {
    return arr.filter(function (u) { return u.age >= 18; });
}
var filteredArr = isLegal3([
    { firstName: "vidit", lastName: "srivastava", age: 19 },
    { firstName: "rohan", lastName: "sharma", age: 15 },
    { firstName: "aditya", lastName: "tiwari", age: 16 },
    { firstName: "akshay", lastName: "khanna", age: 22 }
]);
console.log(filteredArr);
