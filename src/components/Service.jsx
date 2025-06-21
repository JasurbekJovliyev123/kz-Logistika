import React from 'react'
import { useParams } from 'react-router-dom'
import { services } from '../constans';
import map from '../assets/map.png'
const Service = () => {
  const {id}=useParams()
  console.log(id);
   const serviceData=services.find((item)=>item.id==id)
   console.log(serviceData);
   
  return (
    <div className='pt-24 '>
        <div style={{ backgroundImage: `url(${map})` }} className={`container py-24 flex items-center justify-between  w-full h-[500px]`}>
            <div>
                <p className='text-[#2F2F2F] max-w-[400px] leading-[51px] mb-6 text-[48px] font-semibold'>{serviceData.title}</p>
                <button className='bg-[#FF7700] mb-10 md:mb-0 cursor-pointer text-white h-[45px] w-[180px] rounded-[12px] font-medium'>REQUEST NOW</button>
                <p className='mt-20 max-w-[600px] text-[#1A202C] text-sm leading-8'>{serviceData.subtitle}</p>
            </div>
            <img src={serviceData.img} className='w-[570px] h-[350px]' alt="" />
        </div>
    </div>
  )
}

export default Service
