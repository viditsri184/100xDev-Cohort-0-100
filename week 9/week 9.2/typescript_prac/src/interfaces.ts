// interface : To assign a type to the user object, you can use interfaces
interface User{
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // optional argument
};

function isLegal1(user: User){
    if(user.age >= 18){
        return true;
    }
    else{
        return false;
    }
}

function greet1(user: User){
    console.log("Hi there " + user.firstName);
}

isLegal1({
    firstName: "Vidit",
    lastName: "Srivastava",
    age: 20
});