import { createSlice } from "@reduxjs/toolkit";

//data
import {foods} from "../../data"


const initialState={
    isLoading:false,
    isCart:false,
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
                 item.quantity+1
                // item.quantity++
            }else{
                state.shoop.push({...action.payload,quantity:1})
            }
        },
        increment:(state,action)=>{
            const item=state.shoop.find((item)=>item.id===action.payload)
            item.quantity++
        },
        decrement: (state, action) => {
            const item = state.shoop.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }
        },
        removeItem:(state,action)=>{
            const remove=state.shoop.filter((item)=>item.id!==action.payload)
            state.shoop=remove
        },
        endShop:(state,action)=>{
            state.shoop=[],
            state.isCart=true
        }
    }
})

export default foodsSlicer.reducer

export const {addToCart,increment,decrement,removeItem,endShop}=foodsSlicer.actions