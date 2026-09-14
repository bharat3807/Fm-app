import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Search from './pages/Search'
import Liked from './pages/Liked'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Player from './components/Player'
function App() {
  return (  
<BrowserRouter>
<div className='w-full min-h-screen overflow-x-hidden relative'>
<Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Search' element={<Search/>}/>
  <Route path='/Liked' element={<Liked/>}/>

 
 </Routes>
 <Player/>
 </div>
      </BrowserRouter>
  );
}

export default App
