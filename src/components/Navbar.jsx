import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

function Navbar() {
  return (
    <div className=' w-full md:w-100% h-[75px] bg-black fixed bottom-0 md:top-0 text-white flex  justify-around md:justify-center items-center gap-[35px] p-[10px] md:right-8 z-30 rounded-t-[20px]'>
     <div className='text-[2.5em] md:text-[3em] text-white cursor-pointer mt-2'><FaHome /></div> 
     <div className='text-[2.5em] md:text-[3em] text-white cursor-pointer mt-2'><IoSearch /></div>
     <div className='text-[2.5em] md:text-[3em] text-white cursor-pointer mt-2'><FaHeart /></div>
    </div>
  )
}

export default Navbar
