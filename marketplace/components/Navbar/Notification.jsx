import React from 'react'
// import img from "../../public"

const Notification = () => {
  return (
    <div className='absolute py-8 px-4 shadow-lg shadow-blue-300 -left-80 top-14 z-[2222222] bg-slate-700 rounded-2xl w-96'>
      <p>Notification</p>
      <div className='notification_box'>
        <div className='noti_box_img'>
          <img src="/img/user-1.png" alt="User1"
            width={50} height={50}
            className="noti_box_img"
          />
        </div>
        <div className='noti_box_info'>
          <h4>Brijesh Agal</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <small>3 minues ago..</small>          
        </div>
        <span className='noti_box_new'></span>
      </div>
    </div>
  )
}

export default Notification;