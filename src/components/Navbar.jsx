import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

function Navbar() {
  return (
 <div className=' w-full md:w-100% h-[75px] bg-black fixed bottom-0 md:top-0 text-purple-600 flex  justify-around md:justify-center items-center gap-[35px] p-[10px] md:right-8 z-30 rounded-t-[20px]'>
<Link to={"/"}>
 <FaHome className='w-[36px]  h-[36px]' />
</Link>
<Link to={"/Search"}>
 <IoSearch className='w-[36px]  h-[36px]' />
</Link>
<Link to={"/Liked"}>
 <FaHeart className='w-[36px]  h-[36px]' />
</Link>

 </div>
  )
}

export default Navbar
