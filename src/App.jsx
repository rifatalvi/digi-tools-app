
import { useState } from 'react'
import './App.css'
import DigitalTools from './component/DigitalTools/DigitalTools'
import Hero from './component/Hero/Hero'
import Navbar from './component/Navbar/Navbar'
import Cart from './component/Cart/Cart'
import { ToastContainer } from 'react-toastify'
import Activeuser from './component/Activeuser/Activeuser'
import Footer from './component/Footer/Footer'
import Optional from './component/Footer/Optional'
import Steps from './component/Extra/Steps'
import Transparent from './component/Extra/Transparent'
const response = async() =>{
  const res = await fetch('/data.json')
  return res.json()
}
const fetchData = response();
function App() {
  const [isActive,setActive] = useState("products")
  const [carts,setCarts]= useState([]);
  console.log(carts)

 
  return (
    <>
    <Navbar carts={carts}></Navbar>
    <Hero></Hero> 
    <Activeuser></Activeuser>
    {/* name of each tab group should be unique */}
    <div className='text-center space-y-4 mb-5' id='products'>
      <h2 className='font-semibold  text-5xl'>
        Premium Digital Tools
        </h2>
    <p className='opacity-65'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
    </div>
<div className="tabs tabs-box justify-center bg-transparent mb-12">
  <input onClick={()=> setActive("products")} type="radio" name="my_tabs_1" className={`tab mr-4 px-8 rounded-full ${isActive === "products" ? "bg-linear-to-r  from-[#4F39F6] to-[#9514FA]  text-white":""}`} aria-label="Products" />
  <input type="radio" onClick={()=> setActive("cart")} name="my_tabs_1" className={`tab px-8 rounded-full ${isActive === "cart" ?"bg-linear-to-r  from-[#4F39F6] to-[#9514FA]  text-white": ""}`} aria-label={`Cart (${carts.length})`} defaultChecked />

</div>
    {isActive==="products"? <DigitalTools setCarts={setCarts} carts={carts} fetchData={fetchData}></DigitalTools>
    :
    <Cart setCarts={setCarts} carts={carts}></Cart>
    }
    <Steps></Steps>
    <Transparent></Transparent>
<Optional></Optional>
  <Footer></Footer>


     <ToastContainer />
    </>
  )
}

export default App
