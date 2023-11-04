import { useParams } from 'react-router-dom'
import {foods} from "../../data"
import CardDetailse from '../module/CardDetailse'

function Detailse() {


    const {id}=useParams()

    const foodsAll=foods[id-1]

  return (
    <div>
        <CardDetailse data={foodsAll}/>
    </div>
  )
}

export default Detailse