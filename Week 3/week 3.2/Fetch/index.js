/*
Till now we have send requests by two ways to our endpoints
1. Using Postman                2. Using browser URL {query, etc}

There's a third way to do this;
Let's say we have to create an HTML page where
1. You can see the names of 10 people
2. You need to make sure you get these data from an API call
---------------------------------------------------------------------------------

To perform the above operation we use a Node.js API known as Fetch API

FETCH API : The Fetch API provides an interface for fetching resources
(including across the network).
It is a more powerful and flexible replacement for XMLHttpRequest.

NOTE REFERENCE - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
----------------------------------------------------------------------------------------
Concepts and usage -

* The Fetch API uses Request and Response objects (and other things involved with network requests),
as well as related concepts such as CORS and the HTTP Origin header semantics.

* For making a request and fetching a resource, use the fetch() method.
It is a global method in both Window and Worker contexts.
This makes it available in pretty much any context you might want to fetch resources in.

* The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
It returns a Promise that resolves to the Response to that request — as soon as the server
responds with headers — even if the server response is an HTTP error status.
You can also optionally pass in an init options object as the second argument.

8 Once a Response is retrieved,there are a number of methods available to define
what the body content is and how it should be handled.

* You can create a request and response directly using the Request() and Response()
constructors, but it's uncommon to do this directly.
Instead, these are more likely to be created as results of other API actions
(for example, FetchEvent.respondWith() from service workers).

---------------------------------------------------------------------------------------------

Fetch Interfaces -
fetch()
The fetch() method used to fetch a resource.

Headers
Represents response/request headers, allowing you to query them and take
different actions depending on the results.

Request
Represents a resource request.

Response
Represents the response to a request.

----------------------------------------------------------------------------------------

Using the Fetch API -
With the Fetch API, you make a request by calling fetch(), which is available as a global function in both window and worker contexts. You pass it a Request object or a string containing the URL to fetch, along with an optional argument to configure the request.

The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response. You can then check the request status and extract the body of the response in various formats, including text and JSON, by calling the appropriate method on the response.

Here's a minimal function that uses fetch() to retrieve some JSON data from a server:

async function getData() {
    const url = "https://example.org/products.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

The fetch() function will reject the promise on some errors,
but not if the server responds with an error status like 404:
so we also check the response status and throw if it is not OK.

Otherwise, we fetch the response body content as JSON by calling the json() method
of Response, and log one of its values. Note that like fetch() itself, json()
is asynchronous, as are all the other methods to access the response body content.

------------------------------------------------------------------------------------
Setting the method -
By default, fetch() makes a GET request,
but you can use the method option to use a different request method:

const response = await fetch("https://example.org/post", {
    method: "POST",
  // ...
});

-----------------------------------------------------------------------------------
Setting a body -
The request body is the payload of the request:
it's the thing the client is sending to the server.
You cannot include a body with GET requests, but it's useful for requests
that send content to the server, such as POST or PUT requests. For example,
if you want to upload a file to the server, you might make a POST request and
include the file as the request body.

To set a request body, pass it as the body option:

const response = await fetch("https://example.org/post", {
    body: JSON.stringify({ username: "example" }),
  // ...
});

You can supply the body as an instance of any of the following types:

* a string
* ArrayBuffer
* TypedArray
* DataView
* Blob
* File
* URLSearchParams
* FormData

-------------------------------------------------------------------------------------

Setting headers -
Request headers give the server information about the request: for example,
the Content-Type header tells the server the format of the request's body.
Many headers are set automatically by the browser and can't be set by a script:
these are called Forbidden header names.

To set request headers, assign them to the headers option.

You can pass an object literal here containing header-name: header-value properties:

const response = await fetch("https://example.org/post", {
    headers: {
        "Content-Type": "application/json",
    },
  // ...
});

Alternatively, you can construct a Headers object, add headers to that object
using Headers.append(),then assign the Headers object to the headers option:

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
    headers: myHeaders,
  // ...
});

-----------------------------------------------------------------------------------------
Making POST requests -
We can combine the method, body, and headers options to make a POST request:

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
    method: "POST",
    body: JSON.stringify({ username: "example" }),
    headers: myHeaders,
});

----------------------------------------------------------------------------------------
*/

// getting all the required elements
const btn = document.getElementById("btn");
const box = document.querySelector(".container");

// 1. One way of writing fetch using the .then syntax -

// btn.addEventListener("click", (e) => {
//     console.log(e);
//     console.log("hi there");
//     fetch("https://fakerapi.it/api/v1/persons")
//         .then((response) => response.json())
//         .then((data) => {
//             box.innerHTML = JSON.stringify(data); // Use innerHTML and stringify the data for display
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// });


// 2. A more neater way of writing the fetch api is using the async await syntax
btn.addEventListener("click", async (e) => {
    try{
        const url = "https://fakerapi.it/api/v1/persons";
        // by default fetch is set on GET method
        const response = await fetch(url);
        const data = await response.json();
        box.innerHTML = JSON.stringify(data);
    }catch(error){
        console.log(`Error fetching data : ${error}`);
    }
    
});