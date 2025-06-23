

const Country = ({item}) => {
  return (
    <div className="bg-[#F7F7F7] md:py-8 py-5 px-3 rounded-xl">
       <img className="mx-auto my-3 w-[130px] h-[100px] " src={item.image} alt="" />
       <p className="text-center font-semibold text-[#1A202C] text-[18px] md:text-[22px]">{item.name}</p>
       <p className="text-center font-normal mt-2 text-[#1A202C] text-[12px] md:text-[14px]">{item.title}</p>
    </div>
  )
}

export default Country