//redux-toolkit
import { useSelector } from "react-redux";
//image logo
import logo from "../../assets/baner/logo.jpg";

//icons
import {AiOutlineUser} from "react-icons/ai";
import {BiShoppingBag} from "react-icons/bi";

//link in react-router-dom
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {

  const [items,setItems]=useState(0);

  const state=useSelector((state)=>state.food.shoop)

  
  useEffect(()=>{
    const getItems=(data)=>{
      const getItems=JSON.parse(localStorage.getItem("data"))
      setItems(getItems ? getItems.length : 0)
    }
    getItems()

    return()=>{
      window.addEventListener("storage",getItems)
    }

  },[])


  return (
    <div className='flex items-center mt-4 mr-4 lg:justify-between justify-evenly max-w-[1400px] mx-auto'>

      <div className="flex items-center gap-4">
        <button className="flex border-red-400 border-[1px] lg:p-2 lg:w-[150px] w-[120px] rounded-md items-center"> ورود / عضویت <AiOutlineUser size={23} color="#444"/></button>
        <Link to={"/foods"} className="border-[2px] p-1 bg-purple-700 text-white rounded-lg lg:w-[130px] w-[80px] lg:h-[40px] h-[30px] lg:text-xl text-[12px] text-center ">
          لیست غذاها
        </Link>
      </div>

      <div className="flex gap-5 items-center">
        <Link className="flex flex-col items-center" to={"/shooping"}>
        <BiShoppingBag className="relative" size={26} color="blue"/>
         <span className="text-orange-500 hidden lg:block font-bold"> سبد خرید </span>
        </Link>
        <Link to={"/"}>
        <img src={logo} alt="logo" className="lg:w-[80px] w-[60px] rounded-lg"/>
        </Link>
      </div>
    </div>
  )
}

export default Header