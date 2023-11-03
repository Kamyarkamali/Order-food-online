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
    reducers:(state,action)=>{

    }
})

export default foodsSlicer.reducer