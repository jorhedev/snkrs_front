import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Register from './components/Register/Register';
import Detail from './components/Detail/Detail'
import Navbar from "./components/Navbar/Navbar";
import ListadoBusqueda from './views/ListodoBusqueda/ListadoBusqueda'
import ListaBusqWomen from './views/ListodoBusqueda/ListaBusqWomen'
import ListaBusqKids from './views/ListodoBusqueda/ListaBusqKids'
import './App.css'

import Home from './views/Home/Home'


function App() {

  return (
    <>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<ListadoBusqueda/>} />
          <Route path="/cardw" element={<ListaBusqWomen/>} />
          <Route path="/cardk" element={<ListaBusqKids/>} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/register" element={<Register />} />
          </Routes>
      
    </>
  )
}

export default App
