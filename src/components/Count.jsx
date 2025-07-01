import React from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
   const { t, i18n } = useTranslation();
  return (
    <div className='bg-[#EDF2F7] py-16 w-full' ref={ref}>
      <div className="container grid lg:grid-cols-3 gap-y-6 md:grid-cols-2 grid-cols-1">
        
        <div className='text-center'>
          <p className='text-[#121D50] text-6xl md:text-[80px] font-medium'>
            {inView && <CountUp end={5} duration={2} />}+
          </p>
          <p className='text-[#121D50] text-[16px] font-normal mt-2'>{t("лет на рынке")}</p>
        </div>

        <div className='text-center'>
          <p className='text-[#121D50] text-6xl md:text-[80px] font-medium'>
            {inView && <CountUp end={10000} duration={2} separator=',' />}
          </p>
          <p className='text-[#121D50] text-[16px] font-normal mt-2'>{t("тонн груза ежегодно перевозим")}</p>
        </div>

        <div className='text-center'>
          <p className='text-[#121D50] text-6xl md:text-[80px] font-medium'>
            {inView && <CountUp end={3000} duration={2} separator=',' />}+
          </p>
          <p className='text-[#121D50] text-[16px] font-normal mt-2'>{t("успешных кейсов")}</p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;
