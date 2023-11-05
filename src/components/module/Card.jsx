import{ useSelector } from "react-redux";
import Cards from "./Cards";
import Search from "./Search";
import Selected from "./Selected";
import { useState } from "react";

function Card() {
    //fetch data in redux//
    const state=useSelector((state)=>state.food.data)
    const state2=useSelector((state)=>state.food.isLoading)

    const [foods,setFoods]=useState(state)
    

  return (
    <div className="flex flex-col items-center max-w-[1200px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        <Search foods={foods} setFoods={setFoods}/>
        <Selected foods={foods} setFoods={setFoods}/>
      </div>
        <h1 className="text-center mt-5 text-xl">لیست غذاها</h1>
        <div className="md:flex max-w-[1400px] mx-auto grid grid-cols-2 flex-wrap justify-between gap-3 mt-5">
        {state2.isLoading ?<h1>Loading...</h1> : null}
        {foods.map((item)=>(
          <Cards key={item.id} data={item}/>
        ))}
        </div>
    </div>
  )
}

export default Card