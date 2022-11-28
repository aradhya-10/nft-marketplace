import React from 'react';
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa';
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import images from '../../img'

import Link from "next/link"

const Profile = () => {
  return (
    <div className='prof'>
      <div className='prof_acc' >
        <img src={images.user1} alt="user profile" width={50} height={50} className='' />
        <div className='prof_acc_info'>
          <p>vampireAb</p>
          <small>Addresss..0xde0f</small>
        </div>
      </div>
      <div className='prof_menu'> 
        <div className='prof_mnu_one'>
          <div className='prof_menu_one_item'>
            <FaUserAlt />
            <p>
              <Link href={{pathname:'/myprofile'}}>My Profile</Link>
            </p>
          </div>
          <div className='prof_menu_one_item'>
            <FaRegImage />
            <p>
              <Link href={{pathname:'/my-items'}}>My Items</Link>
            </p>
          </div>
          <div className='prof_menu_one_item'>
            <FaUserEdit />
            <p>
              <Link href={{pathname:'/edit-profile'}}>Edit Profile</Link>
            </p>
          </div>
        </div>
        <div className='prf_menu_two'>
          <div className='prof_menu_one_item'>
            <MdHelpCenter />
            <Link href = {{pathname:'/help'}}>Help</Link>
          </div>
          <div className='prof_menu_one_item'>
            <TbDownload />
            <Link href = {{pathname:'/disconnect'}}>Disconnect</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile