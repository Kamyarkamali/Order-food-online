import { Route, Routes } from 'react-router-dom'
import './App.css'

//component
import Home from "./components/templates/Home"
import Card from './components/module/Card'
import Detailse from './components/templates/Detailse'
import Shooping from './components/templates/Shooping'
import { useEffect } from 'react'

function App() {

  useEffect(()=>{
    document.title="عالی فست فود"
  },[])

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/foods' element={<Card/>}/>
      <Route path='/detailse/:id' element={<Detailse/>}/>
      <Route path='/shooping' element={<Shooping/>}/>
    </Routes>
  )
}

export default App
