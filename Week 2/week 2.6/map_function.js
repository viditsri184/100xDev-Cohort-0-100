// map

// task : given an array, give me back a new array in
// which every value is multiplied by 2
// given array = [1, 2, 3];

let arr = [1, 2, 3];
let newArr = arr.map((val) => {
    return val * 2;
});

// console.log(arr, newArr);


// self implementation of the inbuilt map function
const map1 = (arr, fn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        // Call the function on each element
        result.push(fn(arr[i], i, arr));
    }
    return result;
};
const func = (value) => value * 3;

console.log(map1([1, 2, 3], func));

