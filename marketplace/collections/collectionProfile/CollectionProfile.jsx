import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

const collectionProfile = () => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className='w-full mt-6'>
      <div className='w-4/5 mx-auto flex items-center gap-5 bg-slate-800 shadow-md shadow-gray-300 rounded-lg px-8 py-4'>
        <div className=''>
          <img
            src="/img/nft-image-1.png"
            alt="nft image"
            width={800}
            height={800}
            className='rounded-lg'
          />

          <div className=' flex gap-4 text-xl items-center justify-center mt-2'>
            <a href="#" className="bg-blue-300 border border-blue-300 rounded-[50%] flex transition-all duration-300 ease-in text-slate-800 hover:bg-slate-800 hover:text-blue-300 shadow-md shadow-gray-300 ">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
          </div>
        </div>

        <div className='flex items-start '>
          <h1 className="text-3xl">Awesome NFTs Collection</h1>
          <p className="w-9/12">
            Karafuru is home to 5,555 generative arts where colors reign
            supreme. Leave the drab reality and enter the world of Karafuru by
            Museum of Toys.
          </p>

          <div className='flex gap-6 mt-4 bg-slate-800'>
            {cardArray.map((el, i) => (
              <div
                className='bg-slate-800 shadow-md shadow-gray-300 px-4 py-6 rounded-xl text-center'
                key={i + 1}
              >
                <small className="block leading-3">Floor price</small>
                <p className="text-xl">${i + 1}95,4683</p>
                <span className="text-blue-700">+ {i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default collectionProfile;