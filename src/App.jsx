import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import Home from './views/Home/Home'


function App() {

  return (
    <>
          <Routes>
          <Route path="/" element={<Home />} />

          </Routes>
      
    </>
  )
}

export default App
