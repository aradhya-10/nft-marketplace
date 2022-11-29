import React from 'react';
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa';
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";

import Link from "next/link"

const Profile = () => {
  return (
    <div className='rounded-2xl text-base px-2 py-8 absolute w-[320px] -left-[13.5rem] md:-left-[17rem] top-[4.5rem] z-[2222222]'>
      <div className='flex items-start p-6 gap-8' >
        <img src="/img/user-1.png" alt="user profile" width={50} height={50} className='rounded-[50%]' />
        <div>
          <p className='font-semibold'>vampireAb</p>
          <small>0xde0f</small>
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