import React from 'react'
import Login from './Pages/Login.Page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home.Page'
import { Display } from './Components/Display.Product'
import { Product } from './Components/Add.Product'
import { Search } from './Components/Search.Product'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path='/home' element={<Home/>}>
          <Route path='display' element={<Display/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='serach' element={<Search/>}/>       
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
