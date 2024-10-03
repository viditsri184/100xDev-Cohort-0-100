export const MainCard = ({title, amount, orderCount}) => {
    return (
        <div className="text-white">
        <div className="bg-[#146EB4] rounded-tl-lg rounded-tr-lg shadow-sm p-4 hover:bg-[#0E4F82]">
            <div className="flex mb-3 text-white">
                {title}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -4 18 30" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
            <div className="w-[300px] flex justify-between">
                <p className="font-medium text-3xl ">
                    ₹{amount}
                </p>
                {orderCount ? <div className="flex underline text-base text-white font-medium items-center cursor-pointer">
                <p>
                {orderCount} Orders
                </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 -2 24 27" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </div> : null}
            </div>
            
        </div>
        <div>
            <div className="h-[40px] p-2 bg-[#0E4F82] flex justify-between items-center rounded-lg relative bottom-2 text-base">
                <p>Next Payment Date:</p>
                <p>Today,4:00PM</p>
            </div>
        </div>
        </div>
    )
}