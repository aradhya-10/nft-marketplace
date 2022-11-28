import React, { useState } from 'react'
import images from "../../img"
import Link from 'next/link';
import { GrClose } from 'react-icons/gr'
import {
  TiSocialFacebook,
  TiArrowSortedDown,
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiArrowSortedUp
} from "react-icons/ti"
import Button from "../Button/Button"

const Sidebar = ({ setOpenSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  // Discover
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    }
  ]
  // Help Center
  const helpCenter = [
    {
      name: "About",
      link: "about"
    },
    {
      name: "Contact Us",
      link: "contact-us"
    },
    {
      name: "Sign Up",
      link: "sign-up"
    },
    {
      name: "Subscription",
      link: "subscription"
    }
  ]

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    }
    else {
      setOpenDiscover(false);
    }
  }

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    }
    else {
      setOpenHelp(false);
    }
  }

  const closeSidebar = () => {
    setOpenSideMenu(false);
  }

  return (
    <div>
      <GrClose className='sideBar_closeBtn'
        onClick={() => closeSidebar()} />
      <div className='sidebar_box'>
        <img className='' src={images.logo} alt="logo"
          width={150} height={150}
        />
        <p>Discover the most amazing articles.</p>
        <div className='sidebar_social'>
          <a href='#'>
            <TiSocialLinkedin />
          </a>
          <a href='#'>
            <TiSocialTwitter />
          </a>
          <a href='#'>
            <TiSocialInstagram />
          </a>
          <a href='#'>
            <TiSocialFacebook />
          </a>
          <a href='#'>
            <TiSocialYoutube />
          </a>
        </div>
      </div>
      <div className='sideBar_menu'>
        <div>
          <div className='sidbar_menu_box'
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {
            openDiscover && (
              <div className='sidebar_discover' >
                {discover.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{ pathname: `${el.link}` }} >
                      {el.name}
                    </Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
        <div className='sidebar_menu_box'
          onClick={() => openHelpMenu()}
        ><p>Help Center</p>
          <TiArrowSortedDown />
        </div>
        {openHelp && (
          <div className='sidebar_discover'>
            {helpCenter.map((el, i) => (
              <p key={i + 1}>
                <Link href={{ pathname: `${el.link}` }} >
                  {el.name}
                </Link>
              </p>
            ))}
          </div>
        )}
      </div>
      <div className='sidebar_Btn'>
        <Button btnName="Create" />
        <Button btnName="Connect Wallet" />
      </div>
    </div>
  )
}

export default Sidebar
