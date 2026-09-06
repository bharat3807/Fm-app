import React from 'react'
import Categories from '../category';

function Home() {
  return (
    <div className='bg-black min-h-screen  pt-8'>
     
       <div className=' flex gap-5 justify-center '>
       {Categories.map((category)=>{
            return(
            <div className='w-[140px] h-[150px] bg-black flex flex-col items-start gap-5  p-5 justify-start text-[20px] font-semibold text-white rounded-lg shadow-xl hover:bg-gray-600 transition-all duration-200 cursor-pointer'>
                 {category.icon}
                {category.name}
               
            </div>
            )
            
        })}
        </div>     
          
        
    
    </div>
  )
}

export default Home

