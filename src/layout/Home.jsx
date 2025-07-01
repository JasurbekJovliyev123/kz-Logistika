
import Services from '../components/Services'
import { services, services1 } from '../constans'
import Questions from '../components/Questions'
import { questions } from '../constans'
import hh from '../assets/headerbanner2.jpg'
import { Dialog, DialogHeader, DialogContent,DialogTrigger,DialogPortal,DialogOverlay } from "@/components/ui/dialog";
import StatsSection from '@/components/Count';
import images from '../assets/company-image.jpg'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Form from '@/components/Form'
import { useTranslation } from 'react-i18next'
const Home = () => {
   const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    cargo: '',
    name: '',
    phone: '',
    email: '',
    company: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some(value => value.trim() === '');

    if (isEmpty) {
      toast.error("Please fill in all fields!");
    } else {
      toast.success("The request was sent successfully!");
      setFormData({
        from: '',
        to: '',
        cargo: '',
        name: '',
        phone: '',
        email: '',
        company: '',
      })
    }
  };
  return (
    <Dialog>
        <div className='py-8 pt-36 lg:pt-[170px]'>
         <div style={{'backgroundImage':`url(${hh})`}} className="w-full md:h-[650px] h-[800px] bg-cover bg-center">
              <div className='container md:flex block pt-6 h-screen items-center justify-between '>
                  <div className='max-w-[463px]'>
                    <h2 className='md:text-[48px] text-[36px] leading-12 md:leading-16 mb-2 md:mb-4 text-white font-bold'>{t("Транспорт и логистика")}<br /></h2>
                    <p className='md:text-[18px] text-[16px] leading-6 md:leading-8 mb-3  text-white'>{t("Лидеры в сфере транспорта и логистики переосмысливают принципы перемещения товаров в мире, где каждая миля имеет значение.")}</p>
                    <DialogTrigger asChild>
                          <button className='bg-[#FF7700] mb-10 md:mb-0 cursor-pointer text-white h-[45px] w-[180px] rounded-[12px] font-medium'>{t("ЗАПРОСИТЬ СЕЙЧАС")}</button>
                    </DialogTrigger>
              </div>
              <form onSubmit={handleSubmit} className='md:w-[480px] h-[auto] bg-white rounded-[16px] px-10 py-[36px]'>
                <p className='mb-3 text-[#1A202C] text-sm font-medium'>{t("Рассчитать стоимость перевозки:")}</p>
                <div className='w-full flex items-center gap-x-2'>
                  <input name="from" value={formData.from} onChange={handleChange} placeholder={t("Откуда")} className='bg-[#F1F1F1] placeholder:font-medium w-[50%] md:flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="text" />
                  <input name="to" value={formData.to} onChange={handleChange} placeholder={t("Куда")} className='bg-[#F1F1F1] placeholder:font-medium w-[50%] flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="text" />
                </div>

                <p className='my-3 text-[#1A202C] text-sm font-medium'>{t("Информация о грузе:")}</p>
                <input name="cargo" value={formData.cargo} onChange={handleChange} placeholder={t("Описание груза (вес, объем)")} className='bg-[#F1F1F1] w-full placeholder:font-medium flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="text" />

                <p className='my-3 text-[#1A202C] text-sm font-medium'>{t("Контактные данные")}</p>
                <div className='w-full flex items-center gap-x-2'>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder={t("Ваше имя")} className='bg-[#F1F1F1] placeholder:font-medium w-[50%] md:flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="text" />
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder={t("Ваш телефон")} className='bg-[#F1F1F1] placeholder:font-medium w-[50%] md:flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="text" />
                </div>

                <div className='w-full flex my-3 items-center gap-x-2'>
                  <input name="email" value={formData.email} onChange={handleChange} placeholder={t("Your Email")} className='bg-[#F1F1F1] placeholder:font-medium w-[50%] md:flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="email" />
                  <input name="company" value={formData.company} onChange={handleChange} placeholder={t("Ваш")} className='bg-[#F1F1F1] placeholder:font-medium w-[50%] md:flex-1 outline-none px-2.5 h-10 rounded-[12px] border border-transparent focus:border-amber-400 focus:ring-0' type="text" />
                </div>

                <button type="submit" className='bg-[#FF7700] text-white mt-4 text-[16px] cursor-pointer h-[45px] w-full rounded-[12px] font-medium'>{t("Рассчитать")}</button>
              </form>
              </div>
         </div>
         <div className="container py-12">
          <h3 className='text-[#171923] font-bold text-2xl md:text-4xl text-center'>{t("Бесперебойная доставка с логистикой NOMEX")}</h3>
          <p className='text-sm text-[#333] text-center mt-2 md:mt-4'>{t( "Повышайте производительность и добивайтесь успеха с помощью видимости в реальном времени и автоматизации на каждом этапе вашего рабочего процесса.")}</p>
         </div>
          <StatsSection/>

          <div className="container">
             <div className='w-full block md:flex py-16 justify-between gap-8'>
                 <div className="flex-1">
                <h4 className='text-[#FF7700] text-[16px] font-medium uppercase mb-2 md:mb-3'>{t("About")}</h4>
                <h2 className='text-[#121D50] font-bold text-[24px] md:text-[45px]
                 leading-9 md:leading-14 mb-3'>{t("ЛОГИСТИЧЕСКИЕ РЕШЕНИЯ ДЛЯ ВАШЕГО УСПЕХА")}</h2>
                <p className='text-[#4A5568] font-normal text-[16px] mb-3'>{t("В FastGo мы верим в предоставление нашим клиентам персонализированных и эффективных логистических решений, которые отвечают их уникальным потребностям. Благодаря многолетнему опыту и команде экспертов мы стремимся ...")}</p>
                <DialogTrigger asChild>
                          <button className='bg-[#FF7700] mb-10 md:mb-0 cursor-pointer text-white h-[45px] w-[180px] rounded-[12px] font-medium'>{t("ЗАПРОСИТЬ СЕЙЧАС")}</button>
                    </DialogTrigger>
             </div>
             <img src={images} className="flex-1 rounded-2xl w-[541px] h-[390px]"></img>
             </div>
             <div className='grid md:grid-cols-2 gap-5 grid-cols-1 lg:grid-cols-3 mb-16'>
               <div className='md:w-[387px] justify-center text-white rounded-xl  md:h-[84px] h-16 flex items-center gap-x-2 bg-[#FF7700]'>
                   <h5 className='text-[24px] font-semibold'>01</h5>
                   <p className='text-[18px] font-semibold uppercase'>{t("EXPERTISE AND EXPERIENCE")}</p>
               </div>
               <div className='md:w-[387px] justify-center text-white rounded-xl  md:h-[84px] h-16 flex items-center gap-x-2 bg-[#FF7700]'>
                   <h5 className='text-[24px] font-semibold'>02</h5>
                   <p className='text-[18px] font-semibold uppercase'>{t("COMMITMENT TO QUALITY")}</p>
               </div>
               <div className='md:w-[387px] justify-center text-white rounded-xl md:h-[84px] h-16  flex items-center gap-x-2 bg-[#FF7700]'>
                   <h5 className='text-[24px] font-semibold'>03</h5>
                   <p className='text-[18px] font-semibold uppercase'>{t("COMPREHENSIVE SERVICES")}</p>
               </div>
             </div>
          </div>

          <div className='w-full bg-[#EDF0F3] py-16'>
              <h5 className='text-center text-[#FF7700] text-[16px] font-semibold uppercase'>{t("Our Services")}</h5>
              <h2 className='text-[#121D50] text-[24px] md:text-[48px] font-semibold mb-8 mt-2 max-w-[700px] mx-auto text-center leading-9 md:leading-14'>{t("ЭФФЕКТИВНАЯ И НАДЕЖНАЯ ДОСТАВКА С FASTGO")}</h2>
              <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                 {services1 && services1.map((service)=>{
                  return <Services key={service} service={service}/>
                 } 
                 )}
              </div>
          </div>

          <div className="container py-16">
              <h3 className='text-[#FF7700] text-[16px] font-semibold'>{t("FAQs")}</h3>
              <h2 className='text-black text-4xl md:text-[65px] leading-9 md:leading-16 font-semibold max-w-[646px]'>{t("Часто задаваемые вопросы")}</h2>
              <div className='mt-7'>
                  {questions && questions.map((item)=>(
                    <Questions key={item.id} item={item}/>
              ))}
              </div>
          </div>
    </div>
    <DialogPortal>
              <DialogOverlay className="fixed inset-0 bg-black/2 backdrop-blur-sm z-40" />
              <DialogContent className="fixed top-1/2 left-1/2 z-50 translate-x-[-50%] translate-y-[-50%] bg-white p-6 rounded-lg">
                  <DialogHeader>
                    <Form/>
                  </DialogHeader>
             </DialogContent>
            </DialogPortal>
    </Dialog>
  )
}

export default Home
