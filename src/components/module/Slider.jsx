import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

///images
import image1 from "../../assets/slider/1.jpg"
import image2 from "../../assets/slider/2.jpg"
import image3 from "../../assets/slider/3.jpg"
import image4 from "../../assets/slider/4.jpg"
import image5 from "../../assets/slider/5.jpg"
import { Link } from "react-router-dom";

export default function SimpleSlider() {
    const images=[
        {id:1,image:image1,title:"شما پسندیده اید"},
        {id:2,image:image2,title:"شما پسندیده اید"},
        {id:3,image:image3,title:"شما پسندیده اید"},
        {id:4,image:image4,title:"شما پسندیده اید"},
        {id:5,image:image5,title:"شما پسندیده اید"},
    ]
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };
  return (
    <div className="max-w-[900px] mx-auto mt-7 ">
        <h1 className="text-center text-2xl mb-4 text-gray-500">شما پسندیده اید</h1>
    <Slider {...settings}>
       {images.map((item)=>(
           <Link to={"/foods"}>
        <img src={item.image} className="rounded-lg relative lg:h-[600px]" alt="/"/>
        </Link>
        ))}
    </Slider>
        </div>
  );
}