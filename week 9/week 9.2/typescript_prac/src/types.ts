// types let you aggregate data together.
type User1 = {
    firstName: string;
    lastName: string;
    age: number;
};

// Let's say you want to print the id of a user, which can be a number or a string.
type GreetArg = number | string | boolean;

function greet2(id: GreetArg) {
    console.log(id);
}

greet2(1);
greet2("2");

// What if you want to create a type that has every property of multiple types/ interfaces

type Employee1 = {
    name: string;
    startDate: Date;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee1 & Manager;

const teamLead: TeamLead = {
    name: "Vidit",
    startDate: new Date(),
    department: "Software developer",
};


// IQ : What is the difference between interface and a type
/*
Key Differences Between interface and type:

1. Declaration Merging (Extensibility):

interface: Supports declaration merging, which means you can define the same interface multiple times, and TypeScript will merge their properties.
type: Does not support declaration merging. Once a type is defined, it cannot be redefined or extended without using intersection types.
ts

// Interface declaration merging
interface Person {
    name: string;
}

interface Person {
    age: number;
}

// Resulting Person type: { name: string; age: number }
const person: Person = { name: "Alice", age: 30 };

// Type does not merge
type Animal = { species: string };

type Animal = { name: string }; // Error: Duplicate identifier 'Animal'
-------------------------------------------------------------------------------
2. Type Aliases Flexibility:

type: Can define primitives, unions, tuples, and other complex types.
interface: Only defines object shapes (i.e., how an object should look), but cannot directly define primitive types, unions, or tuples.
ts

// Type can handle primitives, unions, and tuples
type ID = string | number; // Union
type Coordinates = [number, number]; // Tuple

// Interface cannot do the same
interface ID = string | number; // Error
-----------------------------------------------------------------------------------
3. Extending or Implementing:

interface: Can be extended using the extends keyword, allowing one interface to inherit properties from another.
type: Can be extended using intersection types (i.e., using & to combine types).
ts

// Extending with interface
interface Shape {
    color: string;
}

interface Circle extends Shape {
    radius: number;
}

// Extending with type (using intersection)
type Shape = { color: string };
type Circle = Shape & { radius: number };
--------------------------------------------------------------------------------------
4. Usage in Classes:

interface: Can be used to define the contract for a class (implements keyword).
type: Cannot be used with implements for classes.
ts

// Interface in a class
interface Drivable {
    drive(): void;
}

class Car implements Drivable {
    drive() {
    console.log("Driving...");
    }
}

// Type cannot be implemented in classes
type DrivableType = { drive(): void };
class Bike implements DrivableType {  // Error
    drive() {
    console.log("Riding...");
    }
}

React Props and State (Preferred Choice):

In React, interface is often preferred when defining props and state because of declaration merging
and better support for complex object types.
type can be used when defining more complex unions, primitives, or tuples in state.

Similarities:
Both interface and type can be used to define the shape of objects, and you can extend or combine them.
Both can be used interchangeably in many cases, especially when defining simple object shapes.


When to Use:
interface: Use when you need to define the shape of objects and classes, especially if you plan to extend the object or use declaration merging.
type: Use when you need to work with unions, primitives, or complex types (like tuples) that interface cannot handle.
*/