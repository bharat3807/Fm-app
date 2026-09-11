import React from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa6";

import {useDispatch, useSelector} from "react-redux"
import { AddLike,RemoveLike } from '../redux/LikeSlice';
import station from '../Station';
function Cards({img, name, city , stationIndex }) {
  const dispatch = useDispatch();
let Likedstation=useSelector(state=>state.Like)
  const FmExistInLiked=Likedstation.some((station)=>(station.stationIndex==stationIndex))
  
  return (
     <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3'>
          <div className='w-[100%] h-[60%] overflow-hidden rounded-lg shadow-lg'>
    <img src={img} alt="" className='object-cover '/>
          </div>
          <div className='text-2xl font-semibold '>
           {name}
            </div>
            <div className='w-full flex justify-between items-center'>
          <div className='text-lg font-bold text-purple-500 '>{city}
          <div>
            {!FmExistInLiked && ( <div onClick={()=>{
                    dispatch(AddLike({name, img,city,stationIndex }))
                   }}>
                   <FaRegHeart className='text-purple-900 text-[1.3em] cursor-pointer'/>
                   </div>)}
                   {FmExistInLiked && ( <div onClick={()=>{
                    dispatch(RemoveLike(stationIndex))
                   }}>
                   <FaHeart className='text-purple-900 text-[1.3em] cursor-pointer'/>
                   </div>)}
          </div>
          </div>
    
          </div>
          <button className='w-full p-3 bg-purple-500 rounded-lg text-white font-semibold hover:bg-purple-700 transition-all cursor-pointer' >Play</button>
        </div>
  )
}

export default Cards
