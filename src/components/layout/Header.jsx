//image logo
import logo from "../../assets/baner/logo.jpg";

//icons
import {AiOutlineUser} from "react-icons/ai";

//link in react-router-dom
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='flex items-center mt-4 mr-4 justify-between max-w-[1400px] mx-auto'>

      <div className="flex items-center gap-4">
        <button className="flex border-red-400 border-[1px] p-2 rounded-md items-center"> ورود / عضویت <AiOutlineUser size={23} color="#444"/></button>
        <Link to={"/foods"} className="border-[2px] p-1 bg-purple-700 text-white rounded-lg">
          لیست غذاها
        </Link>
      </div>

      <div>
        <Link to={"/"}>
        <img src={logo} alt="logo" className="w-[80px] rounded-lg"/>
        </Link>
      </div>

    </div>
  )
}

export default Header