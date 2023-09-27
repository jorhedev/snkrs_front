import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ListadoBusqueda from './views/ListodoBusqueda/ListadoBusqueda'
import Navbar from "./components/Navbar/Navbar";
import './App.css'

import Home from './views/Home/Home'


function App() {

  return (
    <>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<ListadoBusqueda/>} />
          </Routes>
      
    </>
  )
}

export default App
