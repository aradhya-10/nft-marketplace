import React from "react";
import Image from "next/image";

const LikeProfile = () => {
  const imageArray = ["/img/user-1.png", "/img/user-2.png", "/img/user-3.png", "/img/user-4.png"];
  return (
    <div className='flex- items-start '>
      {imageArray.map((el, i) => (
        <div className=' border-2 border-blue-300 rounded-[50%]' key={i + 1}>
          <Image
            src={el}
            width={15}
            height={15}
            key={i + 1}
            className='border rounded-[50%]'
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;