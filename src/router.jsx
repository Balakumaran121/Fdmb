import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Search from './pages/Search'
import Profile from './pages/Profile'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie/:id" element={<Movies/>}/>
      <Route path='/search/:query' element={<Search/>}/>
      <Route path='/actor/:id' element={<Profile/>}/>
    </Routes>
  )
}

export default Router
