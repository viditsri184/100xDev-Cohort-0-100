export function InputBox({ title, placeholder }) {
    return (
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm text-left font-semibold mt-3 pb-1">{title}</label>
            <input required type="text" placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
        </div>
    )
}