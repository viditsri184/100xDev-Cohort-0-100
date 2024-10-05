export function Users() {
    return <div className="mt-5">
        <div className="font-bold text-lg">Users</div>
        <input type="text" placeholder="Search users" className="block border w-full h-10 mt-3 mb-3 rounded-lg outline-none placeholder:pl-1 pl-5" />
        <div className="flex justify-between mt-2">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">U</div>
                </div>
                <div className="flex flex-col justify-center h-full mr-4 leading-[50px] text-lg font-semibold">Vidit Srivastava</div>
            </div>
            <div className="flex flex-col justify-center">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 ">Send Money</button>
            </div>
        </div>
    </div>
}