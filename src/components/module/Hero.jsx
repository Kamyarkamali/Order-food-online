
//images
import image1 from "../../assets/slider/1.jpg"
import image2 from "../../assets/slider/2.jpg"

function Hero() {
  return (
    <div className="flex mt-9 gap-3 lg:justify-evenly justify-center border-t-[2px] border-blue-600">
        <img src={image1} alt="/" className="lg:w-[530px] w-[150px] mt-5 hover:scale-105 duration-300 rounded-l-xl"/>
        <img src={image2} alt="/" className="lg:w-[530px] w-[150px] mt-5 hover:scale-105 duration-300 rounded-r-xl"/>
    </div>
  )
}

export default Hero