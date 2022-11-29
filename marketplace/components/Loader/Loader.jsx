import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <div className='w-full m-6'>
      <div className='w-1/2 text-center mx-auto '>
        <div className='text-center '>
          <img
            src="/img/loadergif.gif"
            alt="loader"
            width={200}
            height={200}
            className='mb-10 rounded-[50%]'
            objectfit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;