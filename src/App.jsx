import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ListadoBusqueda from './views/ListodoBusqueda/ListadoBusqueda'
import ListaBusqWomen from './views/ListodoBusqueda/ListaBusqWomen'
import ListaBusqKids from './views/ListodoBusqueda/ListaBusqKids'
import './App.css'

import Home from './views/Home/Home'


function App() {

  return (
    <>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<ListadoBusqueda/>} />
          <Route path="/cardw" element={<ListaBusqWomen/>} />
          <Route path="/cardk" element={<ListaBusqKids/>} />
          </Routes>
      
    </>
  )
}

export default App
