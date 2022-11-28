import React from 'react'
import images from "../../img"

const Notification = () => {
  return (
    <div className='absolute py-8 px-4 shadow-lg shadow-blue-300 md:-left-80 top-14 z-[2222222] bg-slate-700 rounded-2xl md:w-96 w-80 -left-44'>
      <p className='text-xl font-semibold mb-8'>Notification</p>
      <div className='flex items-start p-2 md:p-4 gap-4 transition-all duration-[0.3s] ease-in hover:bg-blue-300 hover:text-gray-800 hover:rounded-md'>
        <div className='rounded-[5rem]'>
          <img src={images.user1} alt="User1"
            width={50} height={50}
            className=" rounded-[5rem]"
          />
        </div>
        <div className='leading-[0] -mt-3'>
          <h4 className='font-semibold'>Brijesh Agal</h4>
          <p className='text-[12px] md:text-[15px] leading-[0.3] relative'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <small>3 minues ago..</small>          
        </div>
        <span className='w-2 h-2 rounded-[50%] bg-blue-300'></span>
      </div>
    </div>
  )
}

export default Notification;