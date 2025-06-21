import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='w-full  bg-[#FF7700] py-16 pl-3 md:pl-0'>
       <div className="container pb-9 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 items-start justify-between">
            <div className='text-white flex flex-col gap-y-2.5'>
               <h3 className='text-[16px] font-medium'>INFORMATION</h3>
               <p className='text-[16px] font-normal'>Home</p>
               <p className='text-[16px] font-normal'>About</p>
               <p className='text-[16px] font-normal'>Contact</p>
            </div>
            <div className='text-white flex flex-col gap-y-2.5'>
               <h3 className='text-[16px] font-medium'>SERVICES</h3>
               <p className='text-[16px] font-normal'>Road Transportation</p>
               <p className='text-[16px] font-normal'>Multimodal Transportation</p>
               <p className='text-[16px] font-normal'>Rail Transportation</p>
               <p className='text-[16px] font-normal'>Air Freight</p>
               <p className='text-[16px] font-normal'>Customs Clearance</p>
               <p className='text-[16px] font-normal'>Documentation Consulting</p>
               <p className='text-[16px] font-normal'>Cargo Insurance</p>
               <p className='text-[16px] font-normal'>Warehousing Services</p>
            </div>
            <div className='text-white flex flex-col gap-y-2.5'>
               <h3 className='text-[16px] font-medium'>Contact</h3>
               <p className='text-[16px] font-normal'>+7 771 054 06 06</p>
               <p className='text-[16px] font-normal'>nomexlogistics.kz@mail.ru</p>
               <p className='text-[16px] font-normal'>nomexlogistics.kz@gmail.com</p>
               <p className='text-[16px] font-normal'>Pеспублика Казахстан Город <br /> Атырау Гагарина 65</p>
            </div>
            <div className='text-white flex flex-col gap-y-2.5'>
               <h3 className='text-[16px] font-medium'>FOLLOW US ON SOCIAL MEDIA</h3>
               <p className='text-[16px] font-normal'>Join Us</p>
               <div className='flex items-center gap-x-2'> 
                   <NavLink >
                     <FaInstagram className='w-6 h-6'/>
                    </NavLink>
                    <NavLink>
                     <FaTelegramPlane className='w-6 h-6'/>
                    </NavLink>
                    <NavLink>
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
