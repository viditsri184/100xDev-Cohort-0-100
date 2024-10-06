import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from 'axios';

export default function SignUp(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign Up"}></Heading>
        <SubHeading label={"Enter your information to create an account"}/>
        <InputBox onChange={(e) => setFirstName(e.target.value)} title={"First Name"} placeholder={"John"}/>
        <InputBox onChange={(e) => setLastName(e.target.value)} title={"Last Name"} placeholder={"Doe"}/>
        <InputBox onChange={(e) => setUsername(e.target.value)} title={"Email"} placeholder={"johndoe@example.com"}/>
        <InputBox onChange={(e) => setPassword(e.target.value)} title={"Password"} placeholder={""}/>
        <div className="pt-4">
        <Button onClick={async() => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                username, firstName, lastName, password
            });
            localStorage.setItem("token", "Bearer " + response.data.token);
        }} buttonText={"Sign Up"}/>
        </div>
        <BottomWarning label={"Already have an account? "} linkText={"Login"} to={"/signin"}/>
    </div>
    </div>
    </div>
}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDI2NDU4M2U2ZWZlYzVmYzQxOTFmOCIsImlhdCI6MTcyODIxMDAwOSwiZXhwIjoxNzI4MjEzNjA5fQ.i41y4gf_-x8YVkibrdK7qHXy0u1K8eJLulNV9Ip-W5Q