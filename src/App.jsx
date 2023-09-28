import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ListadoBusqueda from './views/ListadoBusqueda/ListadoBusqueda'
import Detail from './components/Detail/Detail'
import Navbar from "./components/Navbar/Navbar";

import './App.css'

import Home from './views/Home/Home'
import Register from './components/Register/Register';


function App() {

  return (
    <>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<ListadoBusqueda/>} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/register" element={<Register />} />
          </Routes>
      
    </>
  )
}

export default App
