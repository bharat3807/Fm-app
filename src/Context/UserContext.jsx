import React, { useRef, useState ,createContext,useEffect} from 'react'
import station from '../Station';
export const datacontext=createContext()
function UserContext({children}) {
    let audioRef = useRef(new Audio())
    let [Index, setIndex] = useState(0)
    let [PlayingFm, setPlayingFm]= useState(false)

     useEffect(()=>{
 audioRef.current.src= station[Index].Station
 audioRef.current.load()
 if(PlayingFm){
  Playfm()
 }
  },[Index])

  
function Playfm(){
  setPlayingFm(true)
  audioRef.current.play()
}
function pausefm(){
  setPlayingFm(false)
  audioRef.current.pause()
}
function nextfm(){
  setIndex((prev)=>(prev+1)%station.length)
}

function prevfm(){
setIndex((prev)=> {
  if(prev === 0){
    return station.length - 1
  }
  else{
    return prev - 1
  }
})
}

  let value={
audioRef , Playfm,pausefm,PlayingFm, setPlayingFm,nextfm,Index, setIndex, prevfm
  }
  return (
    
    <div>
       <datacontext.Provider value={value}>
      {children}
      </datacontext.Provider>
    </div>
  )
}

export default UserContext
