// question 1 : Create a counter in javascript (count down from 30 to 0)
let count = 30;


const countDown = setInterval(() => {
    console.log(count);
    count--;
    if (count < 0) {
        clearInterval(countDown);
    }
}, 1000);

// question 2 : Calculate the time it takes between a setTimeout call and the inner
// function actually running
const startTime = Date.now();

setTimeout(() => {
    const endTime = Date.now();
    const timeElapsed = endTime - startTime;
    console.log(`Time elapsed: ${timeElapsed} ms`);
}, 1000);

// question 3 : Create a terminal clock (HH:MM:SS)

function displayClock(){
    const now = new Date();
    // ensuring there are always two digits by using padStart(2, '0').
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    console.clear();
    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(displayClock, 1000);