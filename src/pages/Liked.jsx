import React from 'react'
import Player from "../Components/Player";
import { useSelector } from 'react-redux';
import Cards from '../components/Cards';
function Like() {
  let station=useSelector(state=>state.Like)
  return (
    <div  className=" w-full min-h-screen bg-black flex pb-[180px]  justify-center pt-2 md:pt-[100px] items-center flex-col gap-[30px]">
     <Player/>
     {!station.length<1?<>
       <h1 className='text-white text-semibold text-[30px]  md:text-[40px]  my-2 items-center pr-[50px]'>
      🩷Liked Fm radio
     </h1>
     <div className='w-full md:h-[100%] h-[65%] flex  flex-wrap   items-center justify-center gap-3 px-2 overflow-auto'>
      {station.map((item, index)=>(
            <Cards key={item.id} img={item.img} name={item.name} city={item.city} stationIndex={item.stationIndex}/>
          ))}

     </div>
      </>
    :
    <div className='text-gray-700 text-[30px] font-bold mt-10'> No liked Fm </div>
    }
    
    </div>
  )
}

export default Like
