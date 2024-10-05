import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export default function SignIn(){
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg w-80 bg-white text-center h-max p-2 px-4">
            <Heading label={"Sign in"}/>
            <SubHeading label={"Enter your credentials to access your account"}/>
            <InputBox title={"Email"} placeholder={"johndoe@example.com"}/>
            <InputBox title={"Password"} placeholder={""}/>
            <div className="pt-4">
                <Button buttonText={"Sign In"}/>
            </div>
            <BottomWarning label={"Don't have an account"} linkText={"Sign Up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}