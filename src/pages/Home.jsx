import React from 'react'
import Categories from '../category';
import Cards from '../components/Cards';
import station from '../Station';

function Home() {
  return (
    <div className='bg-black min-h-screen  '>
     
       <div className='  flex gap-5 justify-center pt-16 overflow-hidden object-cover flex-wrap'>
       {Categories.map((category)=>{
            return(
            <div className='w-[140px] h-[140px] bg-black flex flex-col items-start gap-7  p-5  text-[20px] font-semibold text-white rounded-lg shadow-xl hover:bg-gray-600 transition-all duration-200 cursor-pointer'>
                 {category.icon}
                {category.name}
              
               
            </div>
            )
            
        })}
        <div>

          {station.map((item)=>(
            <Cards key={item.id} station={item}/>
          ))}
        </div>
        </div>     
          
        
    
    </div>
  )
}

export default Home

