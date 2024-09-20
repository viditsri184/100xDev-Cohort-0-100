/*
Debouncing and throttling are techniques used to control how often a function is invoked in response to certain events,
particularly for performance optimization when dealing with frequent events like scrolling, resizing, typing, etc.
One great example of debouncing is search bars of google, amazon etc.
------------------------------------------------------------------------------------------------------------------------------------------------
Debouncing:
Debouncing ensures that a function is called only once after a certain period of inactivity. This means that if an event is continuously triggered,
the function will only be executed after a specified time has passed without any further events.

Use case: Debouncing is useful when you want to delay the execution of a function until the user stops triggering events,
such as waiting for the user to finish typing before sending an API request (autocomplete), or waiting for the user to stop
resizing a window before recalculating the layout.

function debounce(func, delay) {
    let timer;
    return function(...args) {D
        clearTimeout(timer);  // Clear previous timer
        timer = setTimeout(() => func.apply(this, args), delay); // Set a new timer
    };
}

// Example usage
const handleSearch = debounce((e) => {
    console.log("Search query:", e.target.value);
}, 500);

// Input field
document.getElementById("searchInput").addEventListener("input", handleSearch);

* In this example, handleSearch will be invoked only after the user has stopped typing for 500ms.
* If the user continues typing, the function call is delayed until no more input events are fired for 500ms.

------------------------------------------------------------------------------------------------------------------------------------------------------

Throttling:
Throttling ensures that a function is called at regular intervals during a continuous stream of events,
ignoring events in between these intervals. This means the function can only be executed once per specified time period,
no matter how often the event is triggered.

Use case: Throttling is useful for events that can fire many times in quick succession, like scrolling or resizing a window,
where you want to limit the number of times a function is invoked (for performance reasons).

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// Example usage
const handleScroll = throttle(() => {
    console.log("User scrolled!");
}, 1000);

// Scroll event
window.addEventListener("scroll", handleScroll);

* In this example, handleScroll will be invoked at most once every second (1000ms), even if the user scrolls continuously.
-------------------------------------------------------------------------------------------------------------------------------------------------------

Key Differences:
1. Debouncing delays the execution of the function until after a specified delay once the event has stopped firing.
    * Ensures only one call after events have stopped.
    * Useful for situations where you want to wait for a pause in events.
2. Throttling ensures that a function is executed at most once in a specified time interval.
    * Limits the number of calls by setting a fixed time interval between executions.
    * Useful for limiting the frequency of execution for events that happen continuously (e.g., scrolling, resizing).


When to Use:
1. Debouncing: Useful when you want to wait until the user stops performing an action. For example:

* Waiting for the user to stop typing before sending a search query.
* Waiting for window resizing to stop before recalculating layouts.

2. Throttling: Useful when you want to limit how often a function is called during a continuous action. For example:

* Limiting the number of times an API request is sent while a user is scrolling.
* Limiting the number of times a window resize event is handled.

Both techniques improve performance and user experience by preventing unnecessary or excessive function calls.
*/

const input1 = document.getElementById("fnumber");
const input2 = document.getElementById("snumber");

// debouncing
let timeout;
function debounceCalculateResult(){
    clearTimeout(timeout);
    // call the calculateResult function only when the user hasn't typed anything for 500ms, otherwise wait and don't call the backend every-time
    timeout = setTimeout(()=>{
        calculateResult();
    }, 500);
}

async function calculateResult(){
    // Fetch input values inside the function to get updated values
    const num1 = input1.value;
    const num2 = input2.value;
    // console.log(typeof input1); // This will now reflect updated value
    // console.log(typeof input2);

    const url = `http://localhost:8080/sum?a=${num1}&b=${num2}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Invalid input or server error");
        }
        const data = await response.text();
        document.getElementById("display").innerHTML = `Sum of ${num1} and ${num2} is ${data}`;
    } catch (error) {
        console.log(error);
        document.getElementById("display").innerHTML = error.message;
    }
}

input1.addEventListener("input", debounceCalculateResult);
input2.addEventListener("input", debounceCalculateResult);