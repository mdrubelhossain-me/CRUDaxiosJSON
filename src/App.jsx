import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Create from './Components/Create/Create'
import Read from './Components/Read/Read'
import Update from './Components/Update/Update'


function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/read/:id' element={<Read/>} />
      <Route path='/update/:id' element={<Update/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
