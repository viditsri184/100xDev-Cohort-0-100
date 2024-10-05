import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export default function SignUp(){
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign Up"}></Heading>
        <SubHeading label={"Enter your information to create an account"}/>
        <InputBox title={"First Name"} placeholder={"John"}/>
        <InputBox title={"Last Name"} placeholder={"Doe"}/>
        <InputBox title={"Email"} placeholder={"johndoe@example.com"}/>
        <InputBox title={"Password"} placeholder={""}/>
        <div className="pt-4">
        <Button buttonText={"Sign Up"}/>
        </div>
        <BottomWarning label={"Already have an account? "} linkText={"Login"} to={"/signin"}/>
    </div>
    </div>
    </div>
}