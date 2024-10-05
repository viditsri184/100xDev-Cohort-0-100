export function Balance({amount}){
    return <div className="flex items-center text-lg mt-5 mb-2">
        <div className="font-bold">Your Balance</div>
        <div className="indent-3 font-semibold">{amount}</div>
    </div>
}