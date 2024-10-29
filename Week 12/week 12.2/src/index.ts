// interface User{
//     name: string,
//     age: number
// }

// function sumOfAge(user1: User, user2: User){
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name: 'Vidit', age: 20}, {name: 'Vagisha', age: 20});
// console.log(age);

// -------------------------------------------------------------------------------
// Pick API - Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
interface User {
    id: number;
    age: number;
    name: string;
    email: string;
    createdAt: Date;
}

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, 'name' | 'email'>;

const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
};

//  -------------------------------------------------------------------------------

//Partial API - Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
updateUser({});

// ----------------------------------------------------------------------------------
// ReadOnly API - When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

type User2 = {
    name: string,
    age: number
}

const user2: Readonly<User2> = {
    name: 'John',
    age: 21
}

// user2.age = 12 // giving error now because we made its value as readonly too.

// --------------------------------------------------------------------------------
// Records and Map

// Record - Record let's you give a cleaner type to objects

// We can define objects like this
// interface User {
//     id: string;
//     name: string;
//   }
//   type Users = { [key: string]: User };
//   const users: Users = {
//     'abc123': { id: 'abc123', name: 'John Doe' },
//     'xyz789': { id: 'xyz789', name: 'Jane Doe' },
//   };

// or Use Record
interface User3 {
    id: string;
    name: string;
}

type Users3 = Record<string, User3>;

const users3: Users3 = {
    'Vidit': { id: 'abc', name: 'Vidit' },
    'vagisha': { id: 'def', name: 'Vagisha' }
}

console.log(users3['vidit']);
// --------------------------------------------------------------------------------
// Map - maps gives you an even fancier way to deal with objects. Very similar to Maps in C++

interface User4 {
    id: string;
    name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User4>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

// ---------------------------------------------------------------------------------
// Exclude - In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK

// -------------------------------------------------------------------------------

// Type Inference in Zod
import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty" }),
    email: z.string().email({ message: "Invalid email format" }),
    age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody : FinalUserSchema = req.body; // how to assign a type to updateBody?

    if (!success) {
        res.status(411).json({});
        return
    }
    // update database here
    res.json({
        message: "User updated"
    })
});

app.listen(3000);