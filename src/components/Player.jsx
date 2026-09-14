import React, { useContext } from 'react';
import { datacontext } from '../Context/UserContext';
import { FaPlay, FaBackwardStep, FaForwardStep } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";
import station from '../Station';

function Player() {
  const { Playingfm, Playfm, pausefm, Index, nextfm, prevfm } = useContext(datacontext);

  return (
   <div className='w-[94%] max-w-[560px] h-[72px] md:h-[80px] bg-[#9bb0ba] fixed bottom-[72px] md:bottom-0 left-0 right-0 mx-auto rounded-[22px] shadow-2xl flex items-center justify-between px-3 md:px-5 z-50 overflow-hidden box-border'>

   
    <div className='flex items-center gap-2.5 min-w-0 flex-1 pr-2'>
      <img src={station[Index]?.img} alt= '' className='w-[44px] h-[44px] rounded-lg object-cover shrink-0' 
      />
      <div className='flex flex-col min-w-0 overflow-hidden'>
        <span className='text-black text-xs md:text-sm font-bold truncate leading-tight'>
          {station[Index]?.name}
        </span>
        <span className='text-gray-800 text-[10px] md:text-xs font-semibold truncate'>
          {station[Index]?.city}
        </span>
      </div>
    </div>

    
    <div className='flex items-center gap-2 shrink-0'>

     
      <button onClick={() => prevfm()}  className='w-[32px] h-[32px] md:w-[38px] md:h-[38px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-800 transition cursor-pointer shrink-0'>
        <FaBackwardStep className='text-[10px] md:text-xs' />
      </button>

    
      {!Playingfm ? (
        <button onClick={() => Playfm()} className='w-[38px] h-[38px] md:w-[46px] md:h-[46px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-800 transition cursor-pointer shrink-0' >
          <FaPlay className='text-xs md:text-sm translate-x-[1px]' />
        </button>
      ) : (
        <button onClick={() => pausefm()} className='w-[38px] h-[38px] md:w-[46px] md:h-[46px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-800 transition cursor-pointer shrink-0'>
          <IoMdPause className='text-sm md:text-base' />
        </button>
      )}

      
      <button onClick={() => nextfm()} className='w-[32px] h-[32px] md:w-[38px] md:h-[38px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-800 transition cursor-pointer shrink-0'>
        <FaForwardStep className='text-[10px] md:text-xs' />
      </button>

    </div>

  </div>
  );
}

export default Player;