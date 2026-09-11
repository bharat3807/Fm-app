import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Search from './pages/Search'
import Liked from './pages/Liked'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Player from './components/Player';
function App() {
  return (  
<BrowserRouter>
<Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Search' element={<Search/>}/>
  <Route path='/Liked' element={<Liked/>}/>

 
 </Routes>
 <Player/>
      </BrowserRouter>
  );
}

export default App
