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
interface User{
    id: string,
    name: string,
    age: number,
    email: string;
    password:string;
}

