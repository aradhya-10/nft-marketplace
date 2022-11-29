import React from 'react';
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa';
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";


import Link from "next/link"

const Profile = () => {
  return (
    <div className='rounded-md absolute py-8 px-4 shadow-md shadow-gray-300 right-0 top-[4.5rem] text-base z-[2222222] bg-gray-300'>
      <div className='flex items-start gap-4 px-5 py-3' >
        <img src="/img/user-1.png" alt="user profile" width={50} height={50} className='rounded-full' />
        <div className=''>
          <p className='font-semibold'>vampireAb</p>
          <small>0xde0f</small>
        </div>
      </div>
      <div className=''>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center px-6 gap-8 transition-all duration-[0.3s] ease-in hover:bg-blue-300 hover:text-gray-800 hover:rounded-md'>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: '/myprofile' }}>My Profile</Link>
            </p>
          </div>
          <div className='flex items-center px-6 gap-8 transition-all duration-[0.3s] ease-in hover:bg-blue-300 hover:text-gray-800 hover:rounded-md'>
            <FaRegImage />
            <p>
              <Link href={{ pathname: '/my-items' }}>My Items</Link>
            </p>
          </div>
          <div className='flex items-center px-6 gap-8 transition-all duration-[0.3s] ease-in hover:bg-blue-300 hover:text-gray-800 hover:rounded-md'>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: '/edit-profile' }}>Edit Profile</Link>
            </p>
          </div>


          <div className='flex items-center px-6 gap-8 transition-all duration-[0.3s] ease-in hover:bg-blue-300 hover:text-gray-800 hover:rounded-md'>
            <MdHelpCenter />
            <Link href={{ pathname: '/help' }}>Help</Link>
          </div>
          <div className='flex items-center px-6 gap-8 transition-all duration-[0.3s] ease-in hover:bg-blue-300 hover:text-gray-800 hover:rounded-md'>
            <TbDownload />
            <Link href={{ pathname: '/disconnect' }}>Disconnect</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile