import{ useSelector } from "react-redux";
import Cards from "./Cards";
import Search from "./Search";

function Card() {
    //fetch data in redux//
    const state=useSelector((state)=>state.food.data)


  return (
    <div>
        <Search/>
        <div className="flex flex-wrap">
        {state.map((item)=>(
            <Cards key={item.id} data={item}/>
            ))}
            </div>
    </div>
  )
}

export default Card