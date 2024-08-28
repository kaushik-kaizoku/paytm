import { useState } from 'react'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { SendMoney } from './pages/SendMoney'
import { Me } from './pages/Me'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Me/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/send' element={<SendMoney />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
