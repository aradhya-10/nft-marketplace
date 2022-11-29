import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Link from "next/link";

//INTERNAL IMPORT
import { LikeProfile } from "../../components/componentsIndex";

const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };

  return (
    <div className='w-4/5 mb-10 mx-auto flex gap-7'>
      {NFTData.map((el, i) => (
        <Link href={{ pathname: "/NFT-details", query: el }} key={i + 1}>
          <div className='rounded-lg transition-all duration-300 ease-in cursor-pointer' key={i + 1}>
            <div className=''>
              <div className='flex items-center justify-between'>
                <div >
                  <BsImage className='text-blue-300 text-3xl' />
                  <p className='flex items-center gap-4 text-xl px-2 rounded-xl' onClick={() => likeNFT()}>
                    {like ? <AiOutlineHeart /> : <AiFillHeart />}
                    {""}
                    <span>{likeInc + 1}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className='flex'>
              <img
                src={el.image}
                alt="NFT"
                width={500}
                height={500}
                objectfit="cover"
                className='rounded-xl'
              />
            </div>

            <div className='flex p-4 justify-between'>
              <div className=''>
                <LikeProfile />
                <p className="text-3xl font-extrabold">{el.name}</p>
              </div>
              <small className="text-lg">4{i + 2}</small>
            </div>

            <div className='flex p-4  items-end justify-between '>
              <div className='p-2 ml-3 rounded-md bg-blue-300 text-slate-800'>
                <small>Current Bid</small>
                <p>{el.price || i + 4} ETH</p>
              </div>
              <p className='flex items-center gap-2 text-lg'>
                <MdTimer /> <span>{i + 1} hours left</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCardTwo;