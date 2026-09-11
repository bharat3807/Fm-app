import React, { useContext } from 'react'

import { datacontext } from '../Context/UserContext'
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";


import station from '../Station';

function Player() {
  let {Playingfm, Playfm,pausefm, Index, setIndex}=useContext(datacontext)
  return (
    <div  className='w-[100%] md:w-[60%] h-[85px] bg-gray-500 absolute fixed bottom-[75px] md:bottom-0 rounded-t-[30px] shadow-lg flex pt-[10px] md:items-center md:p-20px md:right-75'>
       <div className='flex justify-start items-start  gap-[20px] w-[80%] h-[100%] cursor-pointer  pl-[30px]'>
      <div>
        <img src={station[Index].img} alt='' className='w-[70px] max-h-[60px] md:max-h-[70px] md:w-[80px] rounded-lg object-fill'/>
      </div>
     
      <div className='text-[15px] md:text-[20px]'>
     
      <div className='text-black text-[1.5em] font-semibold '>
        {station[Index].name}
      </div>
    
      <div  className='text-purple-95000 text-[0.6em] font-semibold ' >
        {station[Index].city}
      </div>
      </div>
      </div>
      <div className='w-[20%] h-[100%] md:flex justify-center items-center'>
       {!Playingfm?(
                <div className='w-[55px] h-[55px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer'
                 onClick={()=>Playfm()}><FaPlay /></div>)
                 :(<div className='w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer'
                onClick={()=>pausefm()}><IoMdPause /></div>)}
               
                </div>
    </div>
  )
}

export default Player

