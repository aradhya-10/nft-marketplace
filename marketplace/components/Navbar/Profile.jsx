import React from 'react';
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa';
import { MdHelpCenter } from "react-icons/md";

import { TbDownloadOff, TbDownload } from "react-icons/tb";


import Link from "next/link"

const Profile = () => {
  return (
    <div className='prof'>
      <div className='prof_acc' >
        <img src="/img/user-1.png" alt="user profile" width={50} height={50} className='' />
        <div className='prof_acc_info'>
          <p>vampireAb</p>
          <small>Addresss..0xde0f</small>
        </div>
      </div>
      <div className=''> 
        <div className=''>
          <div className='flex items-center px-6 gap-8 transition-all duration-[0.3s] ease-in hover:bg-blue-300 hover:text-gray-800 hover:rounded-md'>
            <FaUserAlt />
            <p>
              <Link href={{pathname:'/myprofile'}}>My Profile</Link>
            </p>
          </div>
          <div className='flex items-center px-6 gap-8 transition-all duration-[0.3s] ease-in hover:bg-blue-300 hover:text-gray-800 hover:rounded-md'>
            <FaRegImage />
            <p>
              <Link href={{pathname:'/my-items'}}>My Items</Link>
            </p>
          </div>
          <div className='flex items-center px-6 gap-8 transition-all duration-[0.3s] ease-in hover:bg-blue-300 hover:text-gray-800 hover:rounded-md'>
            <FaUserEdit />
            <p>
              <Link href={{pathname:'/edit-profile'}}>Edit Profile</Link>
            </p>
          </div>
        </div>
        <div className=''>
          <div className='flex items-center px-6 gap-8 transition-all duration-[0.3s] ease-in hover:bg-blue-300 hover:text-gray-800 hover:rounded-md'>
            <MdHelpCenter />
            <Link href = {{pathname:'/help'}}>Help</Link>
          </div>
          <div className='flex items-center px-6 gap-8 transition-all duration-[0.3s] ease-in hover:bg-blue-300 hover:text-gray-800 hover:rounded-md'>
            <TbDownload />
            <Link href = {{pathname:'/disconnect'}}>Disconnect</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile