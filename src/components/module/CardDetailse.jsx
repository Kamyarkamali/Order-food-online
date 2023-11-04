//redux
import { useSelector ,useDispatch} from 'react-redux';
import { addToCart } from '../../Redux/fetchare/foodsSlice';

function CardDetailse({data}) {

    const state=useSelector((state)=>state.food.shoop)

    const dispatch=useDispatch()

    console.log(state)

    const {name,price,image}=data
  return (
    <div className='lg:flex grid grid-cols-1 gap-6 lg:justify-around'>

        <div className='border-[2px] border-blue-600 flex flex-col items-center p-3 rounded-lg bg-[#eee] '>
            <img src={image} alt={name} className='lg:w-[340px] w-[180px] rounded-md hover:scale-105 duration-300' />
            <p className='text-center mt-4 text-gray-500 lg:text-xl'>{price} تومان </p>
            <div className='flex justify-center'>
            <button onClick={()=>dispatch(addToCart(state))} className='bg-blue-600 w-[120px] p-1 mt-2 rounded-md text-white'>ثبت سفارش</button>
            </div>
        </div>

        
        {!!state.length?<div className='flex gap-3 flex-col bg-[#eee] items-center border-[2px] p-9 rounded-lg'>
            <p className='mb-1'>سفارشات</p>
            <img src={image} alt="/" className='w-[100px] rounded-lg' />
            <p>{name}</p>
            <div className='flex gap-6'>
            <button className='bg-green-600 p-1 w-[40px] rounded-md text-white'>+</button>
            <span className='text-md'>0</span>
            <button className='bg-green-600 p-1 w-[40px] rounded-md text-white'>-</button>
            </div>
        </div> : <div className='flex justify-center'><p className='bg-blue-600 h-[40px] w-fit text-left p-2 rounded-md text-white'>سبد خرید خالی است :(</p> </div>}
    </div>
  )
}

export default CardDetailse