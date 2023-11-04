import { useSelector } from "react-redux";

//icon
import {AiOutlineSearch} from "react-icons/ai";
import { useState } from "react";

function Search({foods,setFoods}) {

  const [search,setSearch]=useState("")

  const state=useSelector((state)=>state.food.data)


  // button search Handeler

  const searchHandeler=(e)=>{
    if(search){
      const newFoods=state.filter((item)=>item.name.toLowerCase().trim().includes(search))
      setFoods(newFoods)
    } else{
      setFoods(state)
    }
  }

  return (
    <div className="mt-4 flex items-center gap-2 justify-center">
        <button onClick={searchHandeler} className="bg-blue-500 p-2 rounded-md"><AiOutlineSearch size={17} color="white"/></button>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="border-[1px] rounded-md outline-none lg:w-[400px] p-1 text-gray-500 border-blue-500 placeholder:text-right" placeholder="دنبال چه غذایی هستی؟"/>

      

    </div>
  )
}

export default Search