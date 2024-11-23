import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'

const App = () => {
  return (
    <>

    <Header/>



    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/' element={<Blog/>} />
      <Route path='/' element={<Home/>} /> */}
    </Routes>
    </>
    )
}

export default App