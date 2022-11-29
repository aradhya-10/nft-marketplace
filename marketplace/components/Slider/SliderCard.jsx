import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SliderCard = ({ el, i }) => {
  return (
    <motion.div className='p-4'>
      <div className='transiiton-all duration-300 ease-in rounded-xl pb-4 hover:shadow-md hover:shadow-gray-300'>
        <motion.div className=''>
          <img
            src={el.background}
            className='rounder-xl'
            alt="slider profile"
            width={500}
            height={300}
            objectfit="cover"
          />
        </motion.div>
        <div className=''>
          <p>NFT Video #{i + 1}</p>
          <div className='flex items-center gap-2'>
            {/* <LikeProfile /> */}
            <small>{i + 4} 0f 100</small>
          </div>
        </div>

        <div className='flex jsutify-between p-4 mt-4 text-end'>
          <div className='rounded-sm py-1 px-4 border border-blue-300'>
            <small className="rounded-sm py-1 px-2 text-slate-800 border border-blue-300">Current Bid</small>
            <p className="mt-4 font-bold text-xl">{i + 2}.000 ETH</p>
          </div>

          <div className='flex items-end'>
            <small>Reaming time</small>
            <p className="text-xl font-bold">
              {i + 1}h : 15m : {i + 4}0s
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;