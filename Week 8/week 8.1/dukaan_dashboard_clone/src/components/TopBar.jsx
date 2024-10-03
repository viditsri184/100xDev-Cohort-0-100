export const TopBar = () => {
    return <header className="flex gap-3 justify-between">
        <div className="flex items-center">
            <div className="font-semibold text-xl">Payouts</div>
            <div className="flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -4 18 30" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                <p>How it works</p>
            </div>
        </div>
        <div className="bg-[#F2F2F2] text-[#808080]">
            <form className="max-w-md mx-auto">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block rounded p-4 ps-10 text-sm bg-transparent outline-none w-full" placeholder="Search features, tutorials etc..." required />
                </div>
            </form>

        </div>
        <div></div>
    </header>
}