//image logo
import logo from "../../assets/baner/logo.jpg";

//icons
import {AiOutlineUser} from "react-icons/ai";

function Header() {
  return (
    <div className='flex items-center mt-4 mr-4 justify-between max-w-[1400px] mx-auto'>

      <div>
        <button className="flex border-red-400 border-[1px] p-2 rounded-md items-center"> ورود / عضویت <AiOutlineUser size={23} color="#444"/></button>
      </div>

      <div>
        <img src={logo} alt="logo" className="w-[80px] rounded-lg"/>
      </div>

    </div>
  )
}

export default Header