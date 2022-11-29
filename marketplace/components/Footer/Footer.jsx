import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
// import "globals.css";
import images from "../../public/img";
import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className="w-full p-6">
      <div className="lg:w-4/5 w-11/12 my-0 mx-auto flex items-start justify-between gap-12">
        <div className="container"> 
		{/* Style.footer_box_{social} */}
          <Image src="/img/logo.svg" alt="footer logo" height={100} width={100} />
          <a href="/">
            <DiJqueryLogo className="text-7xl" />
          </a>
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>

          <div className="flex gap-5 text-2xl items-center">
            <a href="#" >
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className="container">
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className="container">
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

     	<div className="container">
          <h3>Subscribe</h3>

          <div className="flex items-center justify-between mt-12 py-6 px-8 w-full rounded-lg">
            <input type="email" placeholder="Enter your email *" className="bg-transparent w-11/12"/>
            <RiSendPlaneFill className="cursor-pointer text-3xl" />
          </div>
          <div className="py-4 px-8">
            <p>
              Discover, collect, and sell extraordinary NFTs OpenSea is the
              world first and largest NFT marketplace
            </p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;