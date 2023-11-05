//redux
import { useSelector ,useDispatch} from 'react-redux';
import { addToCart , increment , decrement} from '../../Redux/fetchare/foodsSlice';

//react-hot-toast
import toast, { Toaster } from 'react-hot-toast';

function CardDetailse({data}) {

    const state=useSelector((state)=>state.food.shoop)

    const dispatch=useDispatch()  

    const getTotal=()=>{
      let total=0
      state.forEach((item)=>{
        total+=item.quantity
      })
      return total
    }

    const addToCartHandeler=(data)=>{
      toast.success("به سبد خرید اضافه شد")
      const getItem=JSON.parse(localStorage.getItem("data")) || []
      
      getItem.push(data)
      
      localStorage.setItem("data",JSON.stringify(getItem))
      dispatch(addToCart(data))
    }
    

    const {name,price,image}=data
  return (
    <div className='lg:flex grid grid-cols-1 gap-6 lg:justify-around'>

        <div className='border-[2px] border-blue-600 flex flex-col items-center p-3 rounded-lg bg-[#eee] '>
            <img src={image} alt={name} className='lg:w-[640px] w-[380px] rounded-md hover:scale-105 duration-300' />
            <p className='text-center mt-4 text-gray-500 lg:text-xl'>{price} تومان </p>
            <div className='flex justify-center'>
              
            <button onClick={()=>addToCartHandeler(data)} className='bg-blue-600 w-[120px] p-1 mt-2 rounded-md text-white'>ثبت سفارش</button>
             
            </div>
        </div>
       <Toaster/>
    </div>
  )
}

export default CardDetailse