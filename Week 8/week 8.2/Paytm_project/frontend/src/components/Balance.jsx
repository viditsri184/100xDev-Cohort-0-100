import { useEffect, useState } from "react"

export function Balance(){
    const [token, setToken] = useState("");
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        axios.post("http://localhost:3000/signin")
        .then((res) => {
            setToken(res.data.token);
        })
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance" ,{
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then((res) => {
            setAmount(res.data.balance);
        });
    }, [token, amount]);

    return <div className="flex items-center text-lg mt-5 mb-2">
        <div className="font-bold">Your Balance</div>
        <div className="indent-3 font-semibold">{amount}</div>
    </div>
}