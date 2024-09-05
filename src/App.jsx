import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './firebase/Signup'
// import Login from './firebase/Login'
import Dashboard from './firebase/Dashboard'
import './App.css'
import Login from './firebase/Login'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Signup}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Login/> */}
</>
  )
}

export default App
