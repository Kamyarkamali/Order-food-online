import { Route, Routes } from 'react-router-dom'
import './App.css'

//component
import Home from "./components/templates/Home"
import Card from './components/module/Card'
import Detailse from './components/templates/Detailse'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/foods' element={<Card/>}/>
      <Route path='/detailse/:id' element={<Detailse/>}/>
    </Routes>
  )
}

export default App
