import React, { useState } from 'react'
import images from "../../public/img"
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
    if (!openDiscover)
      setOpenDiscover(true);
    else
      setOpenDiscover(false);
  }

  const openHelpMenu = () => {
    if (!openHelp)
      setOpenHelp(true);
    else
      setOpenHelp(false);
  }

  const closeSidebar = () => {
    setOpenSideMenu(false);
  }

  return (
    <div>
      <GrClose className='absolute top-12 right-8 transition-all duration-200 ease-in-out cursor-pointer shadow-md shadow-blue-400 hover:rotate-45'
        onClick={() => closeSidebar()} />
      <div className='p-4 border border-blue-300 bg-slate-800'>
        {/* <img className='' src={images.logo} alt="logo"
          width={150} height={150}
        /> */}
        <p className='-mt-8'>
          <a href='/'>
          </a>
        </p>
        <p>Discover the most amazing articles.</p>
        <div className='flex items-center text-2xl gap-5'>
          <a className='p-1 rounded-[50%] transition-all duration-[0.3s] ease-in grid hover:bg-blue-300 hover:text-gray-800 hover:shadow-sm' href='#'>
            <TiSocialLinkedin />
          </a>
          <a className='p-1 rounded-[50%] transition-all duration-[0.3s] ease-in grid hover:bg-blue-300 hover:text-gray-800 hover:shadow-sm' href='#'>
            <TiSocialTwitter />
          </a>
          <a className='p-1 rounded-[50%] transition-all duration-[0.3s] ease-in grid hover:bg-blue-300 hover:text-gray-800 hover:shadow-sm' href='#'>
            <TiSocialInstagram />
          </a>
          <a className='p-1 rounded-[50%] transition-all duration-[0.3s] ease-in grid hover:bg-blue-300 hover:text-gray-800 hover:shadow-sm' href='#'>
            <TiSocialFacebook />
          </a>
          <a className='p-1 rounded-[50%] transition-all duration-[0.3s] ease-in grid hover:bg-blue-300 hover:text-gray-800 hover:shadow-sm' href='#'>
            <TiSocialYoutube />
          </a>
        </div>
      </div>
      <div className='-8 uppercase font-medium border-b-2 border-blue-300'>
        <div>
          <div className='flex justify-between items-center cursor-pointer'
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {
            openDiscover && (
              <div className='px-4' >
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
        <div className='flex justify-between items-center cursor-pointer'
          onClick={() => openHelpMenu()}
        ><p>Help Center</p>
          <TiArrowSortedDown />
        </div>
        {openHelp && (
          <div className='px-4'>
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
      <div className=' flex justify-between items-center p-8'>
        <Button btnName="Create" />
        <Button btnName="Connect Wallet" />
      </div>
    </div>
  )
}

export default Sidebar
