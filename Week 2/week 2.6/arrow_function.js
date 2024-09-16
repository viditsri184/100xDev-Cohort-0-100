// map , filter and arrow function
// Normal function
function regular() {
    console.log(this);
}

// Arrow function
const arrow = () => {
    console.log(this);
};

regular();
// arrow();

// this binding in arrow vs normal functions
const obj = {
    name: 'Alice',
    arrowFunc: () => {
        console.log(this.name);
    },
    normalFunc: function () {
        console.log(this.name);
    }
};

obj.arrowFunc();  // undefined (since `this` is not bound to obj)
obj.normalFunc(); // 'Alice' (since `this` refers to obj)


const obj1 = {
    name: 'Alice',
    greet: function () {
        console.log(this.name);
    }
};

obj1.greet(); // 'Alice'
const greetCopy = obj1.greet;
greetCopy();  // undefined (as `this` refers to the global context or is undefined in strict mode)

// arguments Object in Arrow Functions vs. Normal Functions
function regularFunction() {
    const arrowFunc = () => {
        console.log(arguments);
    };
    arrowFunc();
}

regularFunction(1, 2, 3); // [1, 2, 3] (arrow function uses `arguments` from the regularFunction)

function normalFunc() {
    console.log(arguments);
}

normalFunc(1, 2, 3);  // [1, 2, 3]
