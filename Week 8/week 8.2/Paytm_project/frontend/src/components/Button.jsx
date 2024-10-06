export function Button({buttonText, onClick}){
    return(
        <button onClick={onClick} type="button" className="text-white w-full bg-black hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{buttonText}</button>
    )
}