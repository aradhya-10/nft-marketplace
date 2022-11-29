import React from 'react'

const Notification = () => {
  return (
    <div className='absolute py-8 px-4 shadow-lg shadow-blue-300 -left-80 top-14 z-[2222222] bg-slate-700 rounded-2xl w-96'>
      <p>Notification</p>
      <div className='notification_box'>
        <div className='noti_box_img'>
          <img src="/img/user-1.png" alt="User1"
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