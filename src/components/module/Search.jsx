
//icon
import {AiOutlineSearch} from "react-icons/ai";

function Search() {
  return (
    <div className="mt-4 flex items-center gap-2 justify-center">
        <button className="bg-blue-500 p-2 rounded-md"><AiOutlineSearch size={17} color="white"/></button>
        <input type="text" className="border-[1px] rounded-md outline-none w-[400px] p-1 text-gray-500 border-blue-500 placeholder:text-right" placeholder="دنبال چه غذایی هستی؟"/>
    </div>
  )
}

export default Search