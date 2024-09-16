// filter function

// task : given an input array, give me back all the even
// values from it

let input = [1, 2, 3, 4, 5, 6];
let output = input.filter((ele) => {
    // to check even values
    return (ele & 1) === 0;
});

console.log(output);

// self implementation of the inbuilt filter function
const filter1 = (arr, fn) => {
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(fn(arr[i], i, arr)){
            res.push(arr[i]);
        }
    }
    return res;
}

const func = (val) => val % 2 == 0;

console.log(filter1([1, 2, 3], func));