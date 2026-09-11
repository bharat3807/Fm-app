import React from 'react'
function Cards({img, name, city,  onPlay }) {
  return (
     <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3'>
          <div className='w-[100%] h-[60%] overflow-hidden rounded-lg shadow-lg'>
    <img src={img} alt="" className='object-cover '/>
          </div>
          <div className='text-2xl font-semibold '>
           {name}
            </div>
            <div className='w-full flex justify-between items-center'>
          <div className='text-lg font-bold text-purple-500'>{city}</div>
    
          </div>
          <button className='w-full p-3 bg-purple-500 rounded-lg text-white font-semibold hover:bg-purple-700 transition-all cursor-pointer' onClick={onPlay}>Play</button>
        </div>
  )
}

export default Cards
