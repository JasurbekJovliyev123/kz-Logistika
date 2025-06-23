
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import whatsapp from '../assets/whatsapp.png'
import { BsTelephoneFill } from "react-icons/bs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <main className='min-h-[70vh]'>
         <Outlet/>
         <ToastContainer position="top-right" />
      </main> 
       <Footer/> 
       <NavLink to={'tel:+77710540606'} className='rounded-full absolute fixed bottom-32 p-4 bg-[#FF7700] right-3 md:right-10'>
         <BsTelephoneFill className='text-white text-2xl md:text-3xl cursor-pointer'/>
       </NavLink>
       <NavLink to={'https://api.whatsapp.com/send/?phone=%2B77710540606&text&type=phone_number&app_absent=0'} className='rounded-full absolute fixed md:hidden block bottom-16 cursor-pointer p-4 bg-[#25D366] right-3 md:right-10'>
         <img src={whatsapp}  className='text-white w-[25px] md:w-8 '/>
       </NavLink>
    </div>
  )
}

export default MainLayout
