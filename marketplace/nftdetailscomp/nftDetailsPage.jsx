
import React from "react";

//INTERNAL IMPORT
import { nftDescription, nftDetailsImg, nftTabs } from "./nftDetailsIndex";
// import Style from "./nftDetailsPage.module.css";

const nftDetailsPage = ({ nft }) => {
  return (
    <div className= "w-full lg:m-20 m-8">
      <div className= "flex-initial lg:w-4/5 grid gap-20 my-0 mx-auto w=11/12">
        <nftDetailsImg nft={nft} />
        <nftDescription nft={nft} />
      </div>
    </div>
  );
};

export default nftDetailsPage;