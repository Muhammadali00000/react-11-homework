import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Sale from './pages/Sale'

const App = () => {
  return (
    <>

    <Header/>



    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sale' element={<Sale/>} />
    </Routes>
    </>
    )
}

export default App