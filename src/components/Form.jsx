import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
      });
    
      const handleChange = (e) => {
        setFormData(prev => ({
          ...prev,
          [e.target.name]: e.target.value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone } = formData;
    
        if (name.trim() === '' || phone.trim() === '') {
          toast.error("Please fill in all fields!");
        } else {
          toast.success("The request was sent successfully!");
           setFormData({
            name: '',
            phone: ''
          })
        }
      };
  return (
    <div>
        <form onSubmit={handleSubmit} className='md:max-w-[440px] h-auto bg-white rounded-[16px] md:px-8 px-5 py-4 md:py-[36px]'>
                        <p className='mb-3 text-[#1A202C] text-[22px] text-center font-medium'>Request for consultation</p>
                        <p className='my-3 text-[#1A202C] text-sm font-medium text-center'>
                          Our specialists will contact you for a consultation or to calculate the cost of transporting your cargo. They will clarify all the details of the transportation
                        </p>

                        <p className='my-3 text-[#1A202C] text-sm font-medium'>Your Name</p>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className='bg-[#F1F1F1] w-full placeholder:font-medium flex-1 outline-none px-2.5 h-12 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0'
                          type="text"
                          placeholder="Enter your name"
                        />

                        <p className='my-3 text-[#1A202C] text-sm font-medium'>Your Phone</p>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className='bg-[#F1F1F1] w-full placeholder:font-medium flex-1 outline-none px-2.5 h-12 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0'
                          type="text"
                          placeholder="Enter your phone"
                        />

                        <button
                          type="submit"
                          className='bg-[#FF7700] text-white mt-4 text-[16px] cursor-pointer h-[45px] w-full rounded-[12px] font-medium'
                        >
                          Order a Call
                        </button>
                      </form>
    </div>
  )
}

export default Form