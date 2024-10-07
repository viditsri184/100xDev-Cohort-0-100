import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Suspense } from 'react'
import React from 'react';
const SignUp = React.lazy(() => import("./pages/SignUp"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const SendMoney = React.lazy(() => import("./pages/SendMoney"));
const Entry = React.lazy(() => import("./pages/Entry"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Entry/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/send' element={<SendMoney/>}/>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
