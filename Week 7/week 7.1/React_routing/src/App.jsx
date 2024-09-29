import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import { Appbar } from './components/Appbar'
import { Suspense } from 'react'
const Landing = React.lazy(() => import("./components/Landing"))
const Dashboard = React.lazy(() => import("./components/Dashboard"));

/**Suspense will show a fallback (like a loading spinner or text) while the
 * lazy-loaded component is fetched.
The error you're seeing is due to a suspended component being rendered without
a fallback UI, which causes React to throw an error. Adding Suspense fixes this. */

function App() {
  return (
    <>
      <BrowserRouter>
      <Appbar></Appbar>
      {/* we need to add this suspense API because we were getting a error without it,
      due to improper handling of lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
