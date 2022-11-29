import React, { useState, useEffect } from "react";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const NFTDetailsImg = ({ nft }) => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const openDescription = () => {
    if (!description) {
      setDescription(true);
    } else {
      setDescription(false);
    }
  };

  const openDetails = () => {
    if (!details) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };

  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className="w-full">
      <div >
        <div className="flex">
          <div className="flex item-center justify-between z-[111111] px-8 col-span-full;">
            <BsImages className="text-[1.4rem]" />
            <p onClick={() => likeNFT()}>
              {like ? (
                <AiOutlineHeart
                  	className="text-[1.4rem]" />
              ) : (
                <AiFillHeart
					className="text-[1.4rem]"/>
              )}
              <span>23</span>
            </p>
          </div>

          <div className="flex">
            <img
              src="nft_1.png"
              className="rounded-sm"
              alt="NFT image"
              width={700}
              height={800}
              objectFit="cover"
            />
          </div>
        </div>

        <div
          className="py-0.2 px-4 text-base"
          onClick={() => openDescription()}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className="py-0.2 px-4 text-base">
            <p>{nft.description}</p>
          </div>
        )}

        <div
          className="py-0.2 px-4 text-base"
          onClick={() => openDetails()}
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className="py-0.2 px-4 text-base">
            <small>2000 x 2000 px.IMAGE(685KB)</small>
            <p>
              <small>Contract Address</small>
              <br></br>
              {nft.seller}
            </p>
            <p>
              <small>Token ID</small>
              &nbsp; &nbsp; {nft.tokenId}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsImg;