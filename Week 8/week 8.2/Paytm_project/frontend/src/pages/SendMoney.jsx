import { useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import {useCallback, useState} from "react";
import axios from "axios";

export default function SendMoney() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("to");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);

    const handleTransfer = useCallback(async () => {
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }
        
        setLoading(true);

        try {
            const res = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: id,
                amount
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            if (res.status === 403) {
                alert("Transfer forbidden: " + res.statusText);
            } else {
                alert("Transfer successful");
            }
        } catch (error) {
            if (error.response) {
                alert(`Error: ${error.message}`);
            } else {
                alert("An error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    });


    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-4">
                <Heading label={"Send Money"} />
                <div className="flex mt-[60px]">
                    <div className="flex justify-center bg-green-500 rounded-full h-12 w-12">
                        <div className="flex flex-col justify-center text-2xl text-white">{name[0].toUpperCase()}</div>
                    </div>
                    <div className="text-2xl pl-5 flex flex-col justify-center font-bold ">{name}</div>
                </div>
                <div className="text-base font-bold text-left pl-2 pt-2">Amount (in Rs)</div>
                <input onInput={(e) => setAmount(e.target.value)} type="text" placeholder="Enter amount" className="w-full border border-gray-200 rounded-lg pt-1 pb-1 mt-2 mb-2 placeholder:pl-1 pl-3 placeholder:text-gray-400 outline-none shadow"/>
                <div className="flex w-full justify-center items-center">
                <button onClick={handleTransfer} type="button" disabled={loading || !amount} className="w-full focus:outline-none text-white bg-green-500 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-3">Initiate Transfer</button>
                </div>
            </div>
        </div>
    </div>
}