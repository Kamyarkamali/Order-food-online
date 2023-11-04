import { createSlice } from "@reduxjs/toolkit";

//data
import {foods} from "../../data"


const initialState={
    isLoading:false,
    data:foods,
    shoop:[],
}


const foodsSlicer=createSlice({
    name:"foods",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=state.shoop.find((item)=>item.id===action.payload.id)

            if(item){
                item.quantity++
            }else{
                state.shoop.push({...action.payload,quantity:1})
            }
        }
    }
})

export default foodsSlicer.reducer

export const {addToCart}=foodsSlicer.actions