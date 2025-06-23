import React from 'react'

const Delivery = ({item}) => {
  return (
    <div className='px-3 py-[18px] border-[2px] border-[#ff7700] rounded-xl'>
        <p className='md:text-[22px] text-[18px] text-[#1A202C] font-semibold mb-2'>{item.title}</p>
        {item.smTitle && <p>{item.smTitle}</p>}
        {item.subtitle && item.subtitle.map((i,index)=>(
            <p className='md:text-[14px] text-[12px] text-[#1A202C] font-normal mb-1' key={index}>{i}</p>
        ))}
    </div>
  )
}

export default Delivery