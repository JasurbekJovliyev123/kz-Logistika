import { useParams } from 'react-router-dom'
import { countrys, delivery, icons, services } from '../constans';
import map from '../assets/map.png'
import Country from './Country';
import Delivery from './Delivery';
import pdf from '../assets/rekvizit.pdf'
import { IoMenuOutline } from "react-icons/io5";
import { Dialog, DialogHeader, DialogContent,DialogTrigger,DialogPortal,DialogOverlay } from "@/components/ui/dialog";
import { useState } from 'react'
import { toast } from 'react-toastify';
const Service = () => {
  const {id}=useParams()
  console.log(id);
   const serviceData=services.find((item)=>item.id==id)
   console.log(serviceData);
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
    <Dialog>
         <div className='pt-24 pb-12'>
        <div style={{ backgroundImage: `url(${map})` }} className={`container py-16 md:py-24 block md:flex items-center justify-between  w-full h-auto md:h-[500px]`}>
            <div>
                <p className='text-[#2F2F2F] max-w-[400px] leading-[51px] text-3xl mb-6 md:text-[48px] font-semibold'>{serviceData.title}</p>
                <DialogTrigger asChild
                >
                  <button className='bg-[#FF7700]  md:mb-0 cursor-pointer text-white h-[45px] w-[180px] rounded-[12px] font-medium'>REQUEST NOW</button>
                </DialogTrigger>
                <p className='md:mt-20 mt-5 max-w-[600px] text-[#1A202C] text-sm leading-8'>{serviceData.subtitle}</p>
            </div>
            <img src={serviceData.img} className='md:w-[570px] h-[300px] md:h-[350px]' alt="" />
        </div>
         <div className="container">
             <h3 className='text-[#2F2F2F] text-[20px] font-semibold md:text-[36px] text-center mt-6'>From Loading to Delivery: Full Cycle of Railway Transportation</h3>
             <div className='grid w-full lg:grid-cols-2 grid-cols-1 my-6 gap-6'>
                {delivery && delivery.map((item)=>{
                    return <Delivery key={item.id} item={item}/>
                  })}
             </div>
         </div>
        <div className='my-8'>
           <p className='text-[#2F2F2F] text-[28px] font-semibold md:text-[36px] text-center mt-6'>Transportation Geography</p>
           <p className='text-[#1A202C] text-[16px] text-center my-3'>We carefully plan and coordinate the route to minimize transportation time and costs. We offer delivery solutions for the following key routes:</p>
           <div className="container grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2 gap-6 mb-12">
              {countrys && countrys.map((item)=>(
                <Country key={item.id} item={item}/>
              ))}
           </div>
        </div>

         <h2 className='text-[#2F2F2F] md:text-[28px] text-[20px] lg:text-[36px] font-semibold text-center mb-5'>We will quickly deliver the cargo and handle all the paperwork for you</h2>
         <div className="container grid lg:grid-cols-5 md:grid-cols-3 items-center grid-cols-2 pb-20">
            {icons && icons.map((icon)=>{
              return <div key={icon.id}>
                  <img className='mx-auto md:w-auto md:h-auto w-12  mb-4' src={icon.image} alt="" />
                  <p className='text-center md:text-[18px] text-sm text-[#1A202C] font-semibold'>{icon.title}</p>
              </div>
            })}
         </div>

         <div className="container bg-[#F6F6F6] p-5 rounded-xl md:flex md:gap-x-6 block justify-between">
             <div>
              <p className='text-[#1A202C] text-[30px] font-semibold mb-8'>Contact</p>
              <div className=''>
               <p className='text-[#2D3748] text-[16px] font-medium'>E-mail:</p> 
               <div className='flex items-center gap-x-2'>
                   <svg viewBox="0 0 24 24" focusable="false"  className="chakra-icon text-[#FF7700] w-5 h-5 chakra-icon css-147xtcg"><g fill="currentColor"><path d="M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"></path><path d="M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"></path></g></svg>
                   <p className='text-[#FF7700] text-[16px] font-normal cursor-pointer'>nomexlogistics.kz@gmail.com</p>
               </div>
            </div>
            <div className='mt-5'>
               <p className='text-[#2D3748] text-[16px] font-medium'>Contact number:</p> 
               <div className='flex items-center gap-x-2'>
                   <svg viewBox="0 0 14 14" focusable="false" className="text-[#FF7700] w-5 h-5 chakra-icon chakra-icon css-5mtj0t"><path fill="currentColor" d="M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z"></path></svg>
                   <p className='text-[#FF7700] text-[16px] font-normal  cursor-pointer'>+7 771 054 06 06</p>
               </div>
            </div>
             </div>
             <div className='md:mt-0 mt-6'>
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40153.07050239024!2d73.04487703881247!3d51.02414757721507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x425ac3e5d2d54291%3A0x7e248fa0122450f1!2zMDIwMDAwINCa0LDRgNCw0YLQsNC7LCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2s!4v1750664351441!5m2!1sru!2s"
                className="lg:w-[600px] w-[320px] h-[250px] md:h-[300px]"
                
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>


             </div>
             <div className='h-[200px] w-[174px] cursor-pointer bg-[#FF7700] rounded-xl mx-auto py-4 mt-20'>
               <div className='w-[80px] h-[90px] rounded-xl bg-white mx-auto p-2 mb-5'>
                <p className='text-center text-[20px] text-[#FF7700] font-semibold'>PDF</p>
                <IoMenuOutline className='text-gray-300 mx-auto text-3xl'/>
               </div>
               <a className='text-[18px] text-white font-semibold text-center mx-auto' download={true} href={pdf}>Скачать реквизиты</a>
             </div>
         </div>
    </div>
    <DialogPortal>
              <DialogOverlay className="fixed inset-0 bg-black/2 backdrop-blur-sm z-40" />
              <DialogContent className="fixed top-1/2 left-1/2 z-50 translate-x-[-50%] translate-y-[-50%] bg-white p-6 rounded-lg">
                  <DialogHeader>
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
                  </DialogHeader>
             </DialogContent>
            </DialogPortal> 
    </Dialog>
  )
}

export default Service
