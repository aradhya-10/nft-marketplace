import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import { useRouter } from "next/router";

import { Button } from "../componentsIndex.js";

const Brand = () => {
  const router = useRouter();
  return (
    <div className='w-full mt-6 mb-4'>
      <div className='w-4/5 mx-auto flex gap-6 items-center'>
        <div className=''>
          {/* <Image src={images.logo} alt="brand logo" width={100} height={100} /> */}
          <a href="/">
            <DiJqueryLogo className='text-2xl' />
          </a>
          <h1 className="text-lg font-bold">Earn free crypto with us!</h1>
          <p className="text-base">A creative agency that lead and inspire.</p>

          <div className='flex items-center gap-4 mt-4'>
            <Button
              btnName="Create"
              handleClick={() => router.push("/uploadNFT")}
            />
            <Button
              btnName="Discover"
              handleClick={() => router.push("/searchPage")}
            />
          </div>
        </div>
        <div className=''>
          <img src="/img/earn.png" alt="brand logo" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;