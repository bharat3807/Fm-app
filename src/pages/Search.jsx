import React, {  useEffect, useState } from 'react'
import Player from "../Components/Player";
import { FaSearch } from "react-icons/fa";
import Cards from '../components/Cards';
import station from '../Station';

function Search() {
  let [input, setInput]=useState("")
  let [fmlist, setFmList]=useState([])
  useEffect(()=>{
  let a = station.filter((item)=>(item.name.toLowerCase().includes(input) || (item.city.toLowerCase().includes(input) )  || (item.city.includes(input) ) || (item.name.includes(input) ) || (item.city.toUpperCase().includes(input) ) || (item.name.toUpperCase().includes(input) )))
  setFmList(a)
  },[input])
  return (
    <div className=" w-full h-[100vh] bg-black flex justify-start pt-[20px] md:pt-[100px] items-center flex-col gap-[30px]">

<Player/>
<form  action=""
className='w-[90%] md:w-[60%] h-[60px]  bg-gray-800  flex justify-center items-center gap-5 rounded-lg overflow-hidden p-[15px] md:p-0' onSubmit={(e)=>{
  e.preventDefault()
}}>
<FaSearch className='text-gray-200 text-[20px]'/>
<input type =" text" className='w-[90%] h-[100%] bg-gray-800 outline-none border-0 p-[10px] text-[25px] text-white' placeholder='Search Songs...' onChange={(e)=>setInput(e.target.value)} value={input}/>
</form>
{input? (fmlist.length > 0 ?(<div className='w-[100%] h-[65%] md:h-[100%] flex  flex-wrap  justify-center p-[10px] items-center gap-5 overflow-auto'>
{fmlist.map((item)=>(
  <Cards 
 key={item.id} img={item.img} name={item.name} city={item.city} stationIndex={station.id-1}/>
))}
</div>):

(
<div className='text-gray-700 text-[30px] font-bold'>
  This FM channel is not available.
</div>
))

:

(
<div className='text-gray-700 text-[30px] font-bold'>Search Fm Channels</div>
)}

    </div>
  )
}

export default Search
