import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ListadoBusqueda from './views/ListodoBusqueda/ListadoBusqueda'
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Home from './views/Home/Home'


function App() {

  return (
    <>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<ListadoBusqueda/>} />
          <Route path="/cart" element={<ShoppingCart/>} />
          </Routes>
      
    </>
  )
}

export default App
