// components Layout
import Header from './Header'
import Footer from "./Footer"

function Layout({children}) {
  return (
    <div>
        <Header/>


        <div className='h-[1000px]'>{children}</div>
        
        <Footer/>

    </div>
  )
}

export default Layout