import React, { useState } from 'react'

function Selected({foods,setFoods}) {

  const [roule,setRule]=useState("ساندویچ")
  const [food,setFood]=useState(foods)

  //chandeHandeler select

  const changeHandeler=(e)=>{
    const newRoule=e.target.value


    if(newRoule){
      const foodsFiltered=food.filter((item)=>item.category===newRoule)
      setFoods(foodsFiltered)
    }else{
      setFoods(foods)
    }
  }

  return (
    <div>
        <select onChange={changeHandeler} value={roule} className='border-[2px] p-1 mt-3 rounded-md bg-blue-600 text-white text-md '>
            <option value="ساندویچ">ساندویچ</option>
            <option value="پیتزا خانواده">پیتزا خانواده</option>
            <option value="پیتزا مینی">پیتزا مینی</option>
            <option value="سوخاری">سوخاری</option>
            <option value="برگر">برگر</option>
        </select>
        
    </div>
  )
}

export default Selected