import React from 'react'
import image1 from "../assets/image1.jpg"

import station from '../Station'


function Cards({station}) {
return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3'>
        {/* left div */}
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg shadow-lg'>
     <div className='w-[60%] h-full overflow-hidden rounded-lg'>
         <img src={img} alt='' className='object-cover'/>
     </div>
     
     <div className='flex flex-col gap-1'>
       <h2>{name}</h2>
       <p className='text-sm text-gray-500'>
      {city}
       </p>
       
     </div>
        
      </div>
         <div className='flex justify-between items-center'>
           
           <button className='w-full p-3 bg-gray-500 rounded-lg text-black font-semibold hover:bg-red-700 transition-all cursor-pointer' onClick={()=>Playstation(station.url)}>Play</button>
         </div>
      <div>

      </div>
    </div>
  )
}

export default Cards
