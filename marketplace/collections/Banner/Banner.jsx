import React from "react";
import Image from "next/image";

const Banner = ({ bannerImage }) => {
  return (
    <div className=''>
      <div className=''>
        <img
          src={bannerImage}
          objectfit="cover"
          alt="background"
          width={1600}
          height={100}
        />
      </div>

      <div className="hidden">
        <img
          src={bannerImage}
          objecfit="cover"
          alt="background"
          width={1600}
          height={300}
        />
      </div>
    </div>
  );
};

export default Banner;