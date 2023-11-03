//image
import banner from "../../assets/baner/header.jpg"

//icon
import {BsFillAlarmFill} from "react-icons/bs";

function Banner() {
  return (
    <div>
        <img src={banner} alt="banner" className="w-full relative h-[300px] object-cover"/>
        <div className="bg-[#2222229c] w-full h-[300px] absolute top-[6rem]"></div>
        <div className="absolute lg:top-[7rem] lg:right-3 top-[10rem] right-[9rem] text-white">
            <h1 className="lg:text-right text-center font-bold mb-2 text-2xl">فست فود عالی</h1>
            <p className="text-md font-bold">آدرس: بلوار مدرس، جنب پمپ بنزین</p>
            <button className="flex items-center absolute lg:bottom-[-11rem] left-[5rem] bottom-[-5rem] border-[1px] text-[#555] gap-2 rounded-lg bg-white p-2 lg:left-[-79rem]">پیش سفارش <BsFillAlarmFill/></button>
        </div>
    </div>
  )
}

export default Banner