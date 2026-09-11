import { createSlice } from "@reduxjs/toolkit";

const LikeSlice=createSlice({
    name:"Liked",
    initialState:[],
    reducers:{
      AddLike:(state,action)=>{
     let exist =state.find((station)=>station.stationIndex==action.payload.stationIndex)
     if(exist){
        return
    }
            else{
               state.push(action.payload)
            }
        },

         RemoveLike:(state,action)=>{
           return state.filter((station)=>(station.stationIndex!==action.payload))
         }
    }   
})

export const {AddLike,RemoveLike}= LikeSlice.actions
export default LikeSlice.reducer