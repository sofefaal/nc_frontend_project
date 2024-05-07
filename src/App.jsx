import { useState } from 'react'
import axios from "axios"
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'

import './App.css'

function App() {
  

  return(
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
