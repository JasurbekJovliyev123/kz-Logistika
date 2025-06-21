import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io";

const Questions = ({item}) => {
  const [open,setOpen]=useState(false)
  return (
    <div onClick={()=>setOpen(!open)} className={`border cursor-pointer hover:bg-gray-100 relative max-w-[1022px] px-4 py-5 rounded-xl border-[#e2e8f0] mb-4 ${open ? 'md:h-[160px] h-[180px]':'h-auto'}`}>
        <div className='w-full flex items-center justify-between'>
            <p className='md:text-[24px] text-[18px] text-black'>{item.question}</p>
            {!open && <IoIosArrowDown className='w-5 h-5'/>}
            {open && <IoIosArrowUp className='w-5 h-5'/>}
        </div>  
       {
        open &&  <div className='absolute top-16'>
             <p className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-[200px] text-[16px] md:text-[20px] text-[#676767] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>{item.answer}</p>
        </div>
       }
    </div>
  )
}

export default Questions
