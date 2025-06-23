import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { services } from '../constans';
const Footer = () => {
  return (
    <footer className='w-full  bg-[#FF7700] py-16 pl-3 md:pl-0'>
       <div className="container pb-9 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 items-start justify-between">
            <div className='text-white flex flex-col gap-y-2.5'>
               <h3 className='text-[16px] font-medium'>INFORMATION</h3>
               <NavLink to={'/'} className='text-[16px] font-normal'>Home</NavLink>
               <NavLink to={'/'} className='text-[16px] font-normal'>About</NavLink>
               <NavLink to={'/contact'} className='text-[16px] font-normal'>Contact</NavLink>
            </div>
            <div className='text-white flex flex-col gap-y-2.5'>
            <h3 className='text-[16px] font-medium'>Information</h3>
            {services && services.map((item)=>{
                         return <NavLink to={`services/${item.id}`} key={item.id} className='text-sm font-normal cursor-pointer text-black'><p className='text-white text-[16px] font-normal rounded-2xl'>{item.title}</p></NavLink>
                  })}
            </div>
            <div className='text-white flex flex-col gap-y-2.5'>
               <h3 className='text-[16px] font-medium'>Contact</h3>
               <p className='text-[16px] font-normal'>+7 771 054 06 06</p>
               <p className='text-[16px] font-normal'>nomexlogistics.kz@mail.ru</p>
               <p className='text-[16px] font-normal'>nomexlogistics.kz@gmail.com</p>
               <NavLink to={'https://www.google.com/maps/place/Tolebaev+St+38,+Almaty+050000,+Kazakhstan/@43.264902,76.9449608,17z/data=!4m6!3m5!1s0x38836e9bdd9d810b:0xebe6a783d5447605!8m2!3d43.2649007!4d76.9475611!16s%2Fg%2F11bw3ybwm0?entry=tts&g_ep=EgoyMDI0MTIxMS4wIPu8ASoASAFQAw%3D%3D'} className='text-[16px] font-normal'>Pеспублика Казахстан Город <br /> Атырау Гагарина 65</NavLink>
            </div>
            <div className='text-white flex flex-col gap-y-2.5'>
               <h3 className='text-[16px] font-medium'>FOLLOW US ON SOCIAL MEDIA</h3>
               <p className='text-[16px] font-normal'>Join Us</p>
               <div className='flex items-center gap-x-2'> 
                   <NavLink to={'https://www.instagram.com/nomexlogistics.kz/'}>
                     <FaInstagram className='w-6 h-6'/>
                    </NavLink>
                    <NavLink to={'https://t.me/+77014343431'}>
                     <FaTelegramPlane className='w-6 h-6'/>
                    </NavLink>
                    <NavLink to={'https://api.whatsapp.com/send/?phone=%2B77710540606&text&type=phone_number&app_absent=0'}>
                     <FaWhatsapp className='w-6 h-6'/>
                    </NavLink>
               </div>
            </div>
            
       </div>
       <div className='container h-[2px] bg-white'>

       </div>
       <p className='text-white mx-auto text-center mt-6 text-[16px]'>© 2025 All rights reserved</p>
    </footer>
  )
}

export default Footer
