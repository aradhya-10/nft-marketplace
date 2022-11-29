import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import SliderCard from "./SliderCard"

const Slider = () => {
  const FollowingArray = [
    {
      background: '/img/creatorbackground-3.jpeg',
      user: '/img/user-3.png',
    },
    {
      background: '/img/creatorbackground-4.jpg',
      user: '/img/user-4.png',
    },
    {
      background: '/img/creatorbackground-5.jpg',
      user: '/img/user-5.png',
    },
    {
      background: '/img/creatorbackground-6.jpg',
      user: '/img/user-6.png',
    },
    {
      background: '/img/creatorbackground-1.jpeg',
      user: '/img/user-1.png',
    },
    {
      background: '/img/creatorbackground-2.jpeg',
      user: '/img/user-2.png',
    },
  ];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  });

  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction == "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className='w-full'>
      <div className='w-4/5 mx-auto pt-0 -pr-4 pb-8 pl-0'>
        <h2 className="text-xl">Explore NFTs Video</h2>
        <div className='flex gap-6 text-xl items-center'>
          <p>Click on play icon & enjoy Nfts Video</p>
          <div className='flex items-center gap-6 text-xl'>
            <div
              className='border border-blue-300 p-4 transition-all duration-300 ease-in curor-pointer items-center'
              onClick={() => handleScroll("left")}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className='border border-blue-300 p-4 transition-all duration-300 ease-in curor-pointer items-center'
              onClick={() => handleScroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        <motion.div className='overflow-hidden w-full' ref={dragSlider}>
          <motion.div
            ref={dragSlider}
            className='scrollbar-hide'
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {FollowingArray.map((el, i) => (
              <SliderCard key={i + 1} el={el} i={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;