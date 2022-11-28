import React from 'react'
import images from "../../img"

const Notification = () => {
  return (
    <div className='notification'>
      <p>Notification</p>
      <div className='notification_box'>
        <div className='noti_box_img'>
          <img src={images.user1} alt="User1"
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