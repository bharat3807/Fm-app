import React, { useRef, useState } from 'react'
import Categories from '../category';
import Cards from '../components/Cards';
import station from '../Station';




function Home() {
 let [selectCate, setSelectcate] = useState("All");
 let Selectcategory = selectCate === "All" ? station 
 :
  station.filter((items)=>( items.category === selectCate))
  return (
    <div className='bg-black min-h-screen pb-[180px] flex-col flex items-center '>
        
       <div className='  flex gap-5 justify-center pt-16 overflow-hidden object-cover  flex-wrap'>
       {Categories.map((category)=>{
            return(
            <div className='w-[140px] h-[140px] bg-black flex flex-col items-start gap-7  p-5  text-[20px] font-semibold text-white rounded-lg shadow-xl hover:bg-gray-600 transition-all duration-200 cursor-pointer' onClick={()=> setSelectcate(category.name)}>
                 {category.icon}
                {category.name}
              
               
            </div>
            )
            
        })}
        </div>
        <div className='flex flex-wrap gap-4 justify-center items-center'>

          {Selectcategory.map((item, index)=>(
            <Cards key={item.id || index} img={item.img} name={item.name} city={item.city} stationIndex={index}/>
          ))}
        </div>
             
          
        
    
    </div>
  )
}

export default Home

