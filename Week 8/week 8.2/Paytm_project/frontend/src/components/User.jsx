import axios from "axios"
import { useNavigate } from "react-router-dom"

export const User = ({ user }) => {
    const navigate = useNavigate();

    return <div className="flex justify-between mt-5">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">{user.firstName[0].toUpperCase()}</div>
            </div>
            <div className="flex flex-col justify-center h-full mr-4 leading-[50px] text-lg font-semibold">{user.firstName + " " + user.lastName}</div>
        </div>
        <div className="flex flex-col justify-center">
            <button onClick={() => {
                navigate(`/send?to=${user._id}&name=${user.firstName}`);
            }} type="button" className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 ">Send Money</button>
        </div>
    </div>
}