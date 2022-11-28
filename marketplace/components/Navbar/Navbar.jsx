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
import images from "../../img"

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
    <div className='navbar'>
      <div className='navbar_container'>
        <div className='navbar_contaniner_left'>
          <img
            src={images.logo}
            alt="NT MARKETPLACE"
            width={100}
            height={100}
          />
        </div>
        <div className='navbar_container_left_box_input'>
          <div className='navbar_container_left_box_input_box'>
            <input type="text" placeholder="Search NFT" />
            <BsSearch onClick={() => {}} className="search_con" />
          </div>
        </div>
        {/*End of Left Section*/}
        <div className="navbar_container_right">
          {/* Discover Section */}
          <div className="navbar_container_right_discover">
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover &&
              (<div className='navbar_container_right_discover_box'>
                <Discover />
              </div>
              )}
          </div>
          {/* Help Center */}
          <div className='navbar_container_right_help'>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help &&
              (<div className='navbar_container_right_help_box'>
                <HelpCenter />
              </div>
              )}
          </div>
          {/*Notification*/}
          <div className='navbar_container_right_notify'>
            <MdNotifications className="notify" onClick={() => openNotification()} />
            {notification &&
              <Notification />
            }
          </div>

          {/*Create Button */}
          <div className='navbar_container_right_button'>
            <Button btnText="create" />
          </div>

          {/* User Profile */}
          <div className='navbar_container_right_profile_box'>
            <div className='navbar_container_right_profile'>
              <img width="40"
                height="40"
                alt="Profile"
                src={images.user1}
                onClick={() => openProfile()}
                className="navbar_container_right_profile" />
              {profile && <Profile />}
            </div>
          </div>
          {/* Menu Button */}
          <div className='navbar_container_right_menuBtn'>
            <CgMenuRight className="menuIcon" onClick={() => openSidebar()} />

          </div>
        </div>
      </div>
      {/* OPEN SIDEBAR */}
      {
        openSideMenu && (
          <div className='sidebar'>
            <Sidebar setOpenSideMenu={setOpenSideMenu} />
          </div>
        )
      }
    </div>
  )
}

export default Navbar
