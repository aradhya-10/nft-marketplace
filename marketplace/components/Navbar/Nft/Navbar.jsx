import React, {useState,useEffect} from 'react'
import Discover from "./Discover/Discover";
import HelpCenter from "./HelpCenter/HelpCenter";
import Notification from "./Notification/Notification";
import Profile from "./Profile/Profile";
import Sidebar from "./Sidebar/Sidebar";
import {MdNotifications} from 'react-icons/md';
import {BsSearch} from 'react-icons/bs';
import {CgMenuLeft, CgMenuRight} from 'react-icons/cg';
import Button from '../Button/Button'
import images from'../../img';

const Navbar = () => {
	const [notification, setNotification] = useState(false);
	const [profile, setProfile] = useState(false);
	const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
	<div>
		Navbar
	</div>
	//<div>
	// 	<div>
	// 		<div>
	// 			<img
	// 				src={images.logo}
	// 				alt="NT MARKETPLACE"
	// 				width={100}
	// 				height={100}
	// 			/>
	// 		</div>
	// 		<div className="left-box">
	// 			<div className="lb-input">
	// 				<BsSearch onClick={()=>{}}/>
	// 			</div>
	// 		</div>
	// 	</div>
	//</div>
  )
}

export default Navbar
