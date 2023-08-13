import React from 'react'

export const Dishes = ({name, image}) => {
  return (
    <div className=' zoomOut border-2 border-orange-500 border-solid rounded-full p-2 max-md:p-[2px] max-md:h-[88px]  w-[170px] mx-4 max-sm:mx-2  cursor-pointer'>
        <div className=' max-md:h-[80px] max-md:w-[80px] h-[150px] w-[150px] rounded-full relative ' style={{backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(${image})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
     <p className='text-2xl max-md:text-lg max-md:font-semibold font-bold text-center text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>{name}</p>
    </div>
    </div>
  )
}
