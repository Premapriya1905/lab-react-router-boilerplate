import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './AllRoutes'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <AllRoutes/>
    </BrowserRouter>
    </>
  )
}

export default App