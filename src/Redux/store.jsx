import { configureStore } from "@reduxjs/toolkit";

import foodsSlicer from "./fetchare/foodsSlice"


const store=configureStore({
    reducer:{food:foodsSlicer}
})


export default store