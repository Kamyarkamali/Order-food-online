import { useSelector,useDispatch } from "react-redux"

import { addToCart, removeItem ,endShop} from "../../Redux/fetchare/foodsSlice";

//react-hot-toast
import toast, { Toaster } from 'react-hot-toast'

import { Link } from "react-router-dom";

//icon
import { BiHomeAlt2 } from "react-icons/bi"
import {AiOutlineDelete} from "react-icons/ai";
import { useEffect, useState } from "react";


function Shooping() {

    const disptach=useDispatch()

  const state=useSelector((state)=>state.food.shoop)

  const [getItem,setGetItem]=useState([])

    useEffect(()=>{
        const getItem=JSON.parse(localStorage.getItem("data")) || []
        setGetItem(getItem)
    },[])


    const removeItems=(data)=>{
        const items=JSON.parse(localStorage.getItem("data")) ||[]
        const updateItems=items.filter((item)=>item.id!==data.id)
        localStorage.setItem("data",JSON.stringify(updateItems))
        setGetItem(updateItems)
        toast.error("از سبد خرید حذف شد")
    }

    const endShop=()=>{
        localStorage.clear()
        setGetItem([])
        toast.success("خرید با موفقیت انجام شد")
    }

  return (
    <div className="max-w-[1400px] mx-auto">
        {!state.length && <p className="text-center bg-blue-600 p-3 text-xl text-white rounded-md">سبد خرید حالی است</p>}

        {getItem.map((item)=>(
            <div key={item.id} className="flex items-center justify-between m-4 border-[2px] rounded-lg border-blue-500 p-2"> 
                <img src={item.image} alt={item.name} className="w-[140px] rounded-lg"/>
                <p>{item.name}</p>
                <button onClick={()=>removeItems(item)}><AiOutlineDelete size={23} color="red"/></button>
            </div>
        ))}

        <div className="flex flex-col items-center mt-5">
            <Link to={"/"}>
        <button className="flex items-center bg-green-600 p-2 rounded-md text-white"><BiHomeAlt2 size={24} color="white"/>برگشت به صفحه اصلی</button>
            </Link>
        <div className="flex justify-center mt-6 p-2 rounded-md  text-white">
        {
            getItem.length ? <button onClick={endShop} className="w-[130px] p-2 rounded-lg bg-green-500">پرداخت</button> : null
        }
        </div>
        </div>
        <Toaster/>
    </div>
  )
}

export default Shooping