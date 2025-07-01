import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const Questions = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n?.language;

  // Get question and answer in current language, fallback to English if not available
  const question = item.question[lang] || item.question.en;
  const answer = item.answer[lang] || item.answer.en;

  return (
    <div 
      onClick={() => setOpen(!open)} 
      className={`border cursor-pointer hover:bg-gray-100 relative max-w-[1022px] px-4 py-5 rounded-xl border-[#e2e8f0] mb-4 transition-all duration-300 ${
        open ? 'md:min-h-[160px] min-h-[180px]' : 'h-auto'
      }`}
    >
      <div className='w-full flex items-center justify-between'>
        <p className='md:text-[24px] text-[18px] text-black font-medium'>{question}</p>
        {!open ? (
          <IoIosArrowDown className='w-5 h-5 text-[#676767]' />
        ) : (
          <IoIosArrowUp className='w-5 h-5 text-[#676767]' />
        )}
      </div>  
      {open && (
        <div className='mt-4'>
          <p className={`text-[16px] md:text-[20px] text-[#676767] transition-all duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default Questions;