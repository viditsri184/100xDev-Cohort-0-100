import { useNavigate } from "react-router-dom"

export default function Entry() {
    const navigate = useNavigate();

    return <div className="h-screen">
        <div className="flex text-4xl font-bold h-[80px] items-center justify-center">
            <div className="h-8 w-9 cursor-pointer"><img onClick={() => {
                navigate("/");
            }} src="payment-gateway.png" alt="" /></div>
            <div className="indent-2">
                Pay Safe
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col justify-center w-[800px] h-[200px]">
                <p className="text-3xl text-gray-800 text-center font-semibold">"Pay with ease, Pay with PaySafe!
                    Tap and go, Pay and win,
                    Fast and simple, every time,
                    PaySafe—your money's in line!"</p>
            </div>
        </div>
        <div className="flex justify-center mt-4">
        <button type="button" onClick={() => {
            navigate("/signup");
        }} class="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-lg px-9 py-4 me-2 mb-2 mr-8">Sign Up</button>
        <button type="button" onClick={() => {
            navigate("/signin")
        }} class="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-lg px-9 py-4 me-2 mb-2 ml-8">SIgn In</button>
        </div>
    </div>
}