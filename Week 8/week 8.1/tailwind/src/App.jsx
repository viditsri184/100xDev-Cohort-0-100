import './App.css'

// Tailwind Components cheat-sheet : https://www.creative-tim.com/twcomponents/cheatsheet
// Official docs : https://tailwindcss.com/docs/
function App() {

  return (
    <>
      {/* flex in tailwind */}
      {/* <div className='flex justify-center'>
        <div className='bg-red-500'>hi</div>
        <div className='bg-green-500'>hi</div>
        <div className='bg-yellow-500'>hi</div>
      </div> */}
      

      {/* grid in tailwind */}
      {/* <div className='grid grid-cols-10'>
        <div className="bg-red-500 col-span-4">Hi there</div>
        <div className="bg-blue-500 col-span-4">Hi there</div>
        <div className="bg-green-500 col-span-2">Hi there</div>
      </div> */}

      {/* responsiveness in tailwind */}
      {/* <div className='bg-red-500 md:bg-green-500'>
        <div className='text-center sm:text-left'>Hello boiii</div>
      </div> */}

      {/* task1 */}
      <div className='grid grid-cols-1  md:grid-cols-3'>
        <div className='bg-red-500 text-center md:bg-pink-500'>Balance</div>
        <div className='bg-blue-500 text-center md:bg-gray-500'>Amount</div>
        <div className='bg-yellow-500 text-center md:bg-emerald-200'>Profit</div>
      </div>

      {/* the above task can be done with flex easily too */}
      {/* <div className='flex-col justify-between md:flex'>
        <div className='bg-red-500 text-center md:flex-wrap md:w-[33%] md:bg-pink-500'>Balance</div>
        <div className='bg-blue-500 text-center md:flex-wrap md:w-[33%] md:bg-gray-500'>Amount</div>
        <div className='bg-yellow-500 text-center md:flex-wrap md:w-[33%] md:bg-emerald-200'>Profit</div>
      </div> */}
    </>
  )
}

export default App
