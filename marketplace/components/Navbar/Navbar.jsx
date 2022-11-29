import React, { useState, useEffect } from 'react'
import { Discover, HelpCenter, Notification, Profile, Sidebar } from "./index";
// import HelpCenter from "./HelpCenter";
// import Notification from "./Notification";
// import Profile from "./Profile";
// import Sidebar from "./Sidebar";
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';
import { Button } from '../componentsIndex'

const Navbar = () => {
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);

  const openNotification = () => {
    if (!notification) {
      setDiscover(false);
      setHelp(false);
      setNotification(true);
      setProfile(false);
    }
    else {
      setNotification(false);
    }
  }

  const openMenu = (e) => {
    const btnTxt = e.target.innerText;
    if (btnTxt == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
      console.log(discover);
    }
    else if (btnTxt == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    }
    else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  }

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setNotification(false);
      setDiscover(false);
    }
    else {
      setProfile(false);
    }
  }

  const openSidebar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    }
    else {
      setOpenSideMenu(false);
    }
  }

  return (
    <div className='w-full p-6 relative z-[111111]'>
      <div className='mx-auto flex items-center justify-between gap-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
          <img
            src="/img/logo.svg"
            alt="NFT MARKETPLACE"
            width={100}
            height={100}
            className="text-sm text-blue-300"
          />
        </div>
        <div className='border border-blue-300 w-fit flex items-center py-2 px-4 rounded-[2rem]'>
          <input type="text" placeholder="Search NFT" className='border-0 outline-none bg-transparent w-10/12' />
          <BsSearch onClick={() => { }} className="cursor-pointer text-[1.4rem]" />
        </div>
        {/*End of Left Section*/}
        <div className="grid gap-4 items-center grid-cols-3 md:grid-cols-5">
          {/* Discover Section */}
          <div className="hidden md:block relative cursor-pointer">
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover &&
              (<div className='absolute py-4 px-2 shadow-blue-400 text-base w-[15rem] rounded-2xl bg-slate-600'>
                <Discover />
              </div>
              )}
          </div>
          {/* Help Center */}
          <div className='hidden md:block relative cursor-pointer'>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help &&
              (<div className='absolute py-4 px-2 shadow-blue-400 text-base w-[15rem] rounded-2xl bg-slate-600'>
                <HelpCenter />
              </div>
              )}
          </div>
          {/*Notification*/}
          <div className='relative cursor-pointer'>
            <MdNotifications className="text-3xl" onClick={() => openNotification()} />
            {notification &&
              <Notification />
            }
          </div>

          {/*Create Button */}
          <div className='relative cursor-pointer'>
            <Button btnText="create" />
          </div>

          {/* User Profile */}
          <div className='relative cursor-pointer'>
            <div className='relative cursor-pointer'>
              <img width="40"
                height="40"
                alt="Profile"
                src="/img/logo.svg"
                onClick={() => openProfile()}
                className="rounded-full" />
              {profile && <Profile className="relative cursor-pointer" />}
            </div>
          </div>
          {/* Menu Button */}
          <div className='hidden '>
            <CgMenuRight className="text-4xl cursor-pointer" onClick={() => openSidebar()} />

          </div>
        </div>
      </div>
      {/* OPEN SIDEBAR */}
      {
        openSideMenu && (
          <div className='block md:hidden h-screen overflow-y-auto fixed top-0 w-[384px] shadow-blue-300 z-[11111] scrollbar-hide'>
            <Sidebar setOpenSideMenu={setOpenSideMenu} />
          </div>
        )
      }
    </div>
  )
}

export default Navbar
