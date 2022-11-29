import React, { useState } from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);

  //FUNCTION SECTION
  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  const openImage = () => {
    if (!image) {
      setImage(true);
    } else {
      setImage(false);
    }
  };

  const openVideo = () => {
    if (!video) {
      setVideo(true);
    } else {
      setVideo(false);
    }
  };

  const openMusic = () => {
    if (!music) {
      setMusic(true);
    } else {
      setMusic(false);
    }
  };

  return (
    <div className='py-5 w-full'>
      <div className='w-4/5 mx-auto flex items-center justify-between pb-4'>
        <div className='flex gap-4'>
          <button className="border outline-0 p-4 rounded-xl border-slate-800 transition-all duration-300 ease-in cursor-pointer text-blue-300 bg-slate-800" onClick={() => { }}>NFTs</button>
          <button className="border outline-0 p-4 rounded-xl border-slate-800 transition-all duration-300 ease-in cursor-pointer text-blue-300 bg-slate-800" onClick={() => { }}>Arts</button>
          <button className="border outline-0 p-4 rounded-xl border-slate-800 transition-all duration-300 ease-in cursor-pointer text-blue-300 bg-slate-800" onClick={() => { }}>Musics</button>
          <button className="border outline-0 p-4 rounded-xl border-slate-800 transition-all duration-300 ease-in cursor-pointer text-blue-300 bg-slate-800" onClick={() => { }}>Sports</button>
          <button className="border outline-0 p-4 rounded-xl border-slate-800 transition-all duration-300 ease-in cursor-pointer text-blue-300 bg-slate-800" onClick={() => { }}>Photography</button>
        </div>

        <div className='flex items-center gap-4 cursor-pointer px-6 py-4 rounded-xl text-blue-300 border border-blue-300'
          onClick={() => openFilter()} >
          <FaFilter />
          <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
        </div>
      </div>

      {filter && (
        <div className='w-4/5 mx-auto flex py-5 border-t-4 '>
          <div className='p-4'>
            <div className='bg-blue-300 py-2 px-4 text-blue-300 cursor-pointer flex items-center gap-2 rounded-xl'>
              <FaWallet /> <span>10 ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>

          <div className='p-4'>
            <div
              className='bg-blue-300 py-2 px-4 text-blue-300 cursor-pointer flex items-center gap-2 rounded-xl'
              onClick={() => openImage()}
            >
              <FaImages /> <small>Images</small>
              {image ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div className='p-4'>
            <div
              className='bg-blue-300 py-2 px-4 text-blue-300 cursor-pointer flex items-center gap-2 rounded-xl'
              onClick={() => openVideo()}
            >
              <FaVideo /> <small>Videos</small>
              {video ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div className='p-4'>
            <div
              className='bg-blue-300 py-2 px-4 text-blue-300 cursor-pointer flex items-center gap-2 rounded-xl'
              onClick={() => openMusic()}
            >
              <FaMusic /> <small>Musics</small>
              {music ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div className='p-4'>
            <div className='bg-blue-300 py-2 px-4 text-blue-300 cursor-pointer flex items-center gap-2 rounded-xl'>
              <FaUserAlt /> <span>Verified</span>
              <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;