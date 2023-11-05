import React, { useState } from 'react'

//icon
import {FiDollarSign} from "react-icons/fi";
import { Link } from 'react-router-dom';

function Cards({data}) {
  const {name,id,price,image,detailse}=data

  const [hover,setHover]=useState(false);
   
  return (
    <div onMouseLeave={()=>setHover(hover)} onMouseEnter={()=>setHover(!hover)} className='border-[1px] relative rounded-xl p-3 bg-slate-100 max-w-[1400px] mx-auto '>
      <Link to={`/detailse/${id}`}>
      <img src={image} alt="/" className='w-[220px] hover:scale-105 object-cover hover:rotate-6 duration-300 rounded-full'/>
      <p className='text-center mt-3 text-gray-600'>{name}</p>
      <div className='flex items-center'>
        <p><FiDollarSign/></p>
        <p>{price} تومان </p>
      </div>
      </Link>
      {/* menu in hover */}
      <div className='hidden lg:block'>
      <div className={hover ? "absolute top-0 duration-300 bg-[#eeeeee9e] w-full h-full": "hidden duration-300"}>
        <p className='text-center w-[200px] font-bold text-md text-gray-800 mt-5'>{detailse}</p>
        <p className='text-center mt-3 font-bold'>{price} تومان </p>
      </div>
      </div>
      {/* menu in hover */}

    </div>
  )
}

export default Cards