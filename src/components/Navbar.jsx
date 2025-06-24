
import { NavLink } from 'react-router-dom'
import { languages } from '../constans'
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { services } from '../constans';
import { Dialog,DialogClose,DialogContent,DialogPortal,DialogOverlay,DialogTrigger } from '@radix-ui/react-dialog';
import { DialogHeader } from './ui/dialog';
import { useEffect, useRef, useState } from 'react';
const Navbar = () => {
    const [openNavbar,setopenNavbar]=useState(false)
    const [openLang, setopenLang]=useState(false)
    const selectedLanguages = () => {
    if (localStorage.getItem('language')) {
        return JSON.parse(localStorage.getItem('language'));
    } else {
        return languages[0];
    }
};
    
     const [lang,setLang]=useState(selectedLanguages())
     const handleLanguages = (lang) => {
        localStorage.setItem('language', JSON.stringify(lang));
        setLang(lang); 
        setopenLang(false);
};
  const [onServices,setOnServices]=useState(false)
    const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setopenLang(false);
      }
    }

    if (openLang) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openLang, setopenLang]);
    const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOnServices(false);  
      }
    }

    if (onServices) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onServices, setOnServices]);

  return (
    <Dialog>
        <header className='fixed right-0 left-0 z-50 bg-white'>
        <div className='container w-full flex py-3 items-center justify-between mb-0 md:mb-3'>
            <NavLink to={'/'}>
                 <img className='md:w-16 cursor-pointer w-[49px] h-[70px] md:h-[90px]' src="https://nomexlogistics.kz/assets/new-logo-wnId6dZ6.jpg" alt="" />
            </NavLink>
            <DialogTrigger asChild>
                 <button className='bg-[#DF6800] hover:bg-[#FF7700] cursor-pointer text-white uppercase w-[120px] h-[45px] md:w-[146px] text-[10px] md:text-[12px] rounded-[12px] font-bold'>Find out the cost</button>
            </DialogTrigger>
            
            <div className='md:block hidden'>
               <p className='text-[#2D3748] text-[16px] font-medium'>E-mail:</p> 
               <div className='md:flex hidden items-center gap-x-2'>
                   <svg viewBox="0 0 24 24" focusable="false"  className="chakra-icon text-[#FF7700] w-5 h-5 chakra-icon css-147xtcg"><g fill="currentColor"><path d="M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"></path><path d="M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"></path></g></svg>
                   <p className='text-[#FF7700] text-[16px] font-normal cursor-pointer'>nomexlogistics.kz@gmail.com</p>
               </div>
            </div>
            <div className='md:block hidden'>
               <p className='text-[#2D3748] text-[16px] font-medium'>Contact number:</p> 
               <div className='flex items-center gap-x-2'>
                   <svg viewBox="0 0 14 14" focusable="false" className="text-[#FF7700] w-5 h-5 chakra-icon chakra-icon css-5mtj0t"><path fill="currentColor" d="M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z"></path></svg>
                   <p className='text-[#FF7700] text-[16px] font-normal  cursor-pointer'>+7 771 054 06 06</p>
               </div>
            </div>
            <button className='bg-[#FF7700] lg:flex hidden cursor-pointer text-white uppercase h-[45px] w-[146px] text-[12px] rounded-[12px]  items-center justify-center gap-x-2 font-bold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                <p>Call</p>
            </button>
             <NavLink to={'https://api.whatsapp.com/send/?phone=%2B77710540606&text&type=phone_number&app_absent=0'}>
             <button className='bg-[#25D366] cursor-pointer text-white uppercase h-[45px] w-[146px] text-[12px] rounded-[12px] lg:flex hidden items-center justify-center gap-x-2 font-bold'>
                <img className='w-5 h-5' src="https://nomexlogistics.kz/assets/whatsapp-C9zpmOZm.png" alt="" />
                <p>WhatsApp</p>
            </button>
             </NavLink>
            <button className='cursor-pointer text-black uppercase h-[45px] w-[146px] text-[16px] rounded-[12px] flex items-center justify-center gap-x-2 font-medium'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clipPath="url(#clip0_0_454)"><path d="M8.37988 0.299988C4.23789 0.299988 0.879883 3.658 0.879883 7.79999C0.879883 11.942 4.23789 15.3 8.37988 15.3C12.5219 15.3 15.8799 11.942 15.8799 7.79999C15.8799 3.658 12.5219 0.299988 8.37988 0.299988ZM13.1441 11.5992C12.6517 11.2762 12.1293 11.0015 11.5841 10.7789C11.8878 9.97401 12.0673 9.12761 12.1164 8.26874H14.4558C14.3636 9.48557 13.9065 10.6463 13.1441 11.5992ZM2.304 8.26874H4.64336C4.69248 9.1273 4.87187 9.97339 5.17539 10.778C4.6302 11.0007 4.10776 11.2754 3.61533 11.5983C2.85326 10.6456 2.39625 9.48524 2.304 8.26874ZM3.61562 4.00077C4.10806 4.32374 4.6305 4.59845 5.17568 4.82108C4.87198 5.62597 4.69248 6.47237 4.64336 7.33124H2.304C2.39617 6.1144 2.85329 4.95367 3.61562 4.00077ZM8.84863 10.1572V8.26874H11.178C11.1324 9.02327 10.9722 9.76645 10.7028 10.4727C10.0985 10.2987 9.47654 10.1929 8.84863 10.1572ZM10.3135 11.3326C10.121 11.6982 9.90256 12.0496 9.65986 12.3841C9.41263 12.7258 9.14154 13.0497 8.84863 13.3532V11.0956C9.34359 11.1256 9.83431 11.205 10.3135 11.3326ZM8.84863 7.33124V5.44276C9.47654 5.40712 10.0985 5.30128 10.7028 5.12723C10.9722 5.83352 11.1324 6.57671 11.178 7.33124H8.84863ZM8.84863 4.50438V2.24677C9.14196 2.55034 9.41344 2.8743 9.66104 3.2162C9.90332 3.55058 10.1214 3.90186 10.3135 4.26737C9.83431 4.39497 9.34359 4.47437 8.84863 4.50438ZM10.3993 2.63729C10.1875 2.34696 9.97598 2.09003 9.77676 1.86737C10.7907 2.10584 11.7264 2.60087 12.494 3.30497C12.0867 3.56316 11.6571 3.78464 11.2105 3.96678C10.9774 3.50192 10.7061 3.05722 10.3993 2.63729ZM6.05693 10.4727C5.78758 9.76645 5.62735 9.02327 5.58174 8.26874H7.91113V10.1572C7.28323 10.1929 6.66129 10.2987 6.05693 10.4727ZM7.91113 11.0956V13.3535C7.61781 13.0499 7.34633 12.726 7.09873 12.3841C6.85644 12.0496 6.6384 11.6982 6.44629 11.3326C6.92546 11.205 7.41618 11.1256 7.91113 11.0956ZM5.58174 7.33124C5.62735 6.57671 5.78758 5.83352 6.05693 5.12723C6.66129 5.30128 7.28323 5.40712 7.91113 5.44276V7.33124H5.58174ZM6.44629 4.26737C6.63878 3.90173 6.85721 3.55034 7.0999 3.21591C7.34713 2.87414 7.61822 2.55029 7.91113 2.24677V4.50468C7.41617 4.47457 6.92545 4.39507 6.44629 4.26737ZM6.36162 2.63729C6.05484 3.05732 5.7835 3.50211 5.55039 3.96708C5.10379 3.78484 4.67426 3.56326 4.26689 3.30497C5.0342 2.60105 5.96945 2.10603 6.98301 1.86737C6.78379 2.09003 6.57227 2.34696 6.36045 2.63729H6.36162ZM5.54922 11.6329C5.78233 12.0979 6.05367 12.5427 6.36045 12.9627C6.57227 13.253 6.78379 13.5099 6.98301 13.7326C5.96893 13.4942 5.03314 12.9991 4.26543 12.295C4.67289 12.0367 5.10251 11.8151 5.54922 11.6329ZM10.3993 12.9627C10.7061 12.5427 10.9774 12.0979 11.2105 11.6329C11.6572 11.8151 12.0867 12.0367 12.494 12.295C11.7263 12.9991 10.7905 13.4942 9.77647 13.7326C9.97598 13.5099 10.1875 13.253 10.3993 12.9627ZM12.1164 7.33124C12.0673 6.47268 11.8879 5.62658 11.5844 4.82196C12.1296 4.59932 12.652 4.32461 13.1444 4.00165C13.9065 4.95435 14.3635 6.11474 14.4558 7.33124H12.1164Z" fill="black"></path></g><defs><clipPath id="clip0_0_454"><rect width="15" height="15" fill="white" transform="translate(0.879883 0.299988)"></rect></clipPath></defs></svg>
                
                <div className='relative'>
                    <p className='text-md capitalize' onClick={()=>setopenLang(!openLang)}>
                          <span >{lang.shortLanguaggeName}</span>
                          <span>-</span>
                          <span>{lang.languageName}</span>
                    </p>
                    {openLang && (
                        <div ref={modalRef} className='absolute -right-7 h-[90px] w-[160px] justify-items-start rounded-lg py-3 bg-white top-8 border z-50 flex flex-col'>
                          {languages &&
                            languages
                              .filter(item => item.id !== lang.id)
                              .map((item) => (
                                <p key={item.id} onClick={() => handleLanguages(item)}>
                                  <span className='text-black p-1 hover:bg-gray-200 w-full block rounded-md'>
                                    {item.languageName}
                                  </span>
                                </p>
                              ))}
                        </div>
                      )}
                </div>
            </button>
        </div>
        <div className='container'>
             <div className='w-full flex border-b border-b-gray-300 pb-2 items-center gap-x-6 justify-end'>
               <NavLink to={'/'} className='text-[18px] hover:text-[#FF7700] md:block hidden text-black font-semibold'>Home</NavLink>
               <NavLink to={'/'} className='text-[18px] hover:text-[#FF7700] md:block hidden text-black font-semibold'>About</NavLink>
                <div className='relative'>
                <p onClick={()=>setOnServices(!onServices)} className='text-[18px] md:block hidden cursor-pointer hover:text-[#FF7700] text-black font-semibold'>Services</p>
                  {onServices && <div ref={menuRef} className='absolute w-[224px] md:flex hidden top-8 z-50 border-2 right-0 border-gray-100 rounded-2xl p-3 bg-white shadow-lg flex-col '>
                      {services && services.map((item)=>{
                         return <NavLink to={`services/${item.id}`} onClick={()=>setOnServices(!onServices)} key={item.id} className='text-sm font-normal cursor-pointer text-black'><p className='hover:bg-gray-200 p-2 rounded-2xl'>{item.title}</p></NavLink>
                  })}
                  </div>}
               </div>
               <NavLink to={'/contact'} className='text-[18px] hover:text-[#FF7700] md:block hidden text-black font-semibold'>Contact</NavLink>
                 <TfiMenu onClick={()=>setopenNavbar(!openNavbar)} className='text-3xl md:hidden block cursor-pointer'/>
            </div>
            
          {openNavbar && 
          <div className='w-full'>
               <div className='absolute top-0 left-0 right-0 w-full p-6 py-16 h-[100vh] bg-gray-300 flex flex-col gap-3'>
              <IoMdClose onClick={()=>setopenNavbar(!openNavbar)} className='text-2xl cursor-pointer ml-auto'/>
               <NavLink to={'/'} onClick={()=>setopenNavbar(!openNavbar)} className='text-[18px] hover:text-[#FF7700] text-black font-semibold'>Home</NavLink>
               <NavLink to={'/'} onClick={()=>setopenNavbar(!openNavbar)} className='text-[18px] text-black font-semibold'>About</NavLink>
               <div className='relative'>
                <NavLink onClick={()=>setOnServices(!onServices)}  className='text-[18px] hover:text-[#FF7700] text-black font-semibold'>Services</NavLink>
                  {onServices && <div ref={menuRef} className='absolute top-20 z-50 rounded-2xl bg-gray-400 -mt-12 shadow-xl p-5'>
                  {services && services.map((item)=>{
                         return <NavLink to={`services/${item.id}`} onClick={()=>setOnServices(!onServices)} key={item.id} className='text-sm font-normal cursor-pointer rounded-2xl p-2 text-black'><p onClick={()=>setopenNavbar(!openNavbar)}>{item.title}</p></NavLink>
                  })}
                  </div>}
               </div>
               <NavLink to={'/contact'} onClick={()=>setopenNavbar(!openNavbar)} className='text-[18px] hover:text-[#FF7700] text-black font-semibold'>Contact</NavLink>
               
            </div>
          </div>
          }
        </div>
     
          

           <DialogPortal className='w-full'>
              <DialogOverlay className="fixed inset-0 bg-black/2 backdrop-blur-sm z-40" />
              <DialogContent className="fixed top-1/2 left-1/2 z-50 translate-x-[-50%] translate-y-[-50%] bg-white p-6 rounded-lg">
              <DialogClose className='mr-auto flex justify-end w-full text-end cursor-pointer'><IoMdClose className='text-xl z-20 '/></DialogClose>
                  <DialogHeader>
                    <form className='md:w-[480px] w-full mx-auto md:h-[450px] bg-white rounded-[16px] px-5 md:px-10 py-4 md:py-[36px]'>
                 <p className='mb-3 text-[#1A202C] text-[22px] text-center font-medium'>Cargo Transportation Services NOMEX LOGISTICS</p>
                 <div className='w-full flex items-center gap-x-2'>
                   <input placeholder='From' className='bg-[#F1F1F1] placeholder:font-medium w-[50%] md:flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="text" name="" />
                   <input placeholder='To' className='bg-[#F1F1F1] placeholder:font-medium w-[50%]  flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="text" name="" />
                 </div>
                 <p className='my-3 text-[#1A202C] text-sm font-medium'>Cargo information:</p>
                   <input placeholder='Cargo description (weight, volume)' className='bg-[#F1F1F1] w-full placeholder:font-medium flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="text" name="" />
                   <p className='my-3 text-[#1A202C] text-sm font-medium'>Contact details</p>
                 <div className='w-full flex items-center gap-x-2'>
                   <input placeholder='Your name' className='bg-[#F1F1F1] placeholder:font-medium w-[50%] md:flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="text" name="" />
                   <input placeholder='Your phone' className='bg-[#F1F1F1] placeholder:font-medium w-[50%] md:flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="text" name="" />
                 </div>
                 <div className='w-full flex my-3 items-center gap-x-2'>
                   <input placeholder='Your Email' className='bg-[#F1F1F1] placeholder:font-medium w-[50%] md:flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="email" name="" />
                   <input placeholder='Company' className='bg-[#F1F1F1] placeholder:font-medium w-[50%] md:flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="text" name="" />
                 </div>
                 <button className='bg-[#FF7700] text-white mt-4 text-[16px] cursor-pointer h-[45px] w-full rounded-[12px] font-medium'>Order cargo transportation</button>
              </form>
                  </DialogHeader>
             </DialogContent>
            </DialogPortal>
    </header>
    </Dialog>
  )
}

export default Navbar
