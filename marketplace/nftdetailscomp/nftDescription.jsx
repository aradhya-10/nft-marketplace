import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

//INTERNAL IMPORT
import images from "../public/img";
import { Button } from "../components/componentsIndex.js";
// import { nftTabs } from "../nftDetailsIndex";

//IMPORT SMART CONTRACT
// import { nftMarketplaceContext } from "../Context/NFTMarketplaceContext";

const NFTDescription = ({ nft }) => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);

  const router = useRouter();

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provananceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];
  const ownerArray = [
    images.user1,
    images.user8,
    images.user2,
    images.user6,
    images.user5,
  ];

  const openSocial = () => {
    if (!social) {
      setSocial(true);
      setNFTMenu(false);
    } else {
      setSocial(false);
    }
  };

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
      setSocial(false);
    } else {
      setNFTMenu(false);
    }
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;

    if (btnText == "Bid History") {
      setHistory(true);
      setProvanance(false);
      setOwner(false);
    } else if (btnText == "Provanance") {
      setHistory(false);
      setProvanance(true);
      setOwner(false);
    }
  };

  const openOwmer = () => {
    if (!owner) {
      setOwner(true);
      setHistory(false);
      setProvanance(false);
    } else {
      setOwner(false);
      setHistory(true);
    }
  };

  //SMART CONTRACT DATA
//   const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);

  return (
    <div className="w-full">
      <div className="w-full my=0 mx-auto">
        {/* //Part ONE */}
        <div className="flex item-center justify-between relative">
          <p>Virtual Worlds</p>
          <div className="flex item-center gap-8 text-xl">
            <MdCloudUpload className="cursor-pointer" onClick={() => openSocial()} />
            {social && (
              <div className="absolute top-20 bg-blue-300 rounded-sm left2/3 w-56 p-4" >
                <a href="#" className="flex items-center ease-in text-base px-0 py-2 gap-4 :hover-p-2 rounded">
                  <TiSocialFacebook /> Facebooke
                </a>
                <a href="#" className="flex items-center ease-in text-base px-0 py-2 gap-4 :hover-p-2 rounded">
                  <TiSocialInstagram /> Instragram
                </a>
                <a href="#">
                  <TiSocialLinkedin /> LinkedIn
                </a>
                <a href="#" className="flex items-center ease-in text-base px-0 py-2 gap-4 :hover-p-2 rounded">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#" className="flex items-center ease-in text-base px-0 py-2 gap-4 :hover-p-2 rounded">
                  <TiSocialYoutube /> YouTube
                </a>
              </div>
            )}

            <BsThreeDots
              className="cursor-pointer"
              onClick={() => openNFTMenu()}
            />

            {NFTMenu && (
              <div className="absolute top-20 bg-blue-300 rounded-sm left2/3 w-56 p-4">
                <a href="#">
                  <BiDollar /> Change price
                </a>
                <a href="#">
                  <BiTransferAlt /> Transfer
                </a>
                <a href="#">
                  <MdReportProblem /> Report abouse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep /> Delete item
                </a>
              </div>
            )}
          </div>
        </div>
        {/* //Part TWO */}
        <div >
          <h1 className="text-5xl">
            {nft.name} #{nft.tokenId}
          </h1>
          <div className="flex item-center gap-8 pb-6">
            <div className="flex item-center justify-between gap-4 leading-4">
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div >
                <small className="font-medium">Creator</small> <br />
                <Link href={{ pathname: "/author", query: `${nft.seller}` }}>
                  <span className="font-extrabold">
                    Karli Costa <MdVerified />
                  </span>
                </Link>
              </div>
            </div>

            <div className="font-extrabold">
              <Image
                src={images.creatorbackground1}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />

              <div>
                <small className="font-medium">Collection</small> <br />
                <span className="font-extrabold">
                  Mokeny app <MdVerified />
                </span>
              </div>
            </div>
          </div>

          <div className="m-4">
            <p>
              <MdTimer /> <span>Auction ending in:</span>
            </p>

            <div className="lex gap-12 item-center">
              <div>
                <p className="text-5xl font-black">2</p>
                <span className="font-semibold">Days</span>
              </div>
              <div>
                <p className="text-5xl font-black">22</p>
                <span className="font-semibold">hours</span>
              </div>
              <div>
                <p className="text-5xl font-black">45</p>
                <span className="font-semibold">mins</span>
              </div>
              <div>
			  	<p className="text-5xl font-black">12</p>
                <span className="font-semibold">secs</span>
              </div>
            </div>

            <div className="flex gap-12 item-end justify-between mt-16">
              <div>
                <small className="py-2 px-4 ml-8 bg-blue-300 text-white text-xl rounded-lg">Current Bid</small>
                <p className="p-4 text-2xl font-black">
                  {nft.price} ETH <span>( ≈ $3,221.22)</span>
                </p>
              </div>

              <span>[96 in stock]</span>
            </div>

            <div className="mt-12 lex gap-12 item-center">
              {currentAccount == nft.seller.toLowerCase() ? (
                <p>You can't buy your own NFT</p>
              ) : currentAccount == nft.owner.toLowerCase() ? (
                <Button
                  icon=<FaWallet />
                  btnName="List on Marketplace"
                  handleClick={() =>
                    router.push(
                      `/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}&price=${nft.price}`
                    )
                  }
                  classStyle={Style.button}
                />
              ) : (
                <Button
                  icon=<FaWallet />
                  btnName="Buy NFT"
                  handleClick={() => buyNFT(nft)}
                  classStyle={Style.button}
                />
              )}

              <Button
                icon=<FaPercentage />
                btnName="Make offer"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </div>

            <div className="lex gap-4 mt-12">
              <button onClick={(e) => openTabs(e)}>Bid History</button>
              <button onClick={(e) => openTabs(e)}>Provanance</button>
              <button onClick={() => openOwmer()}>Owner</button>
            </div>

            {history && (
              <div className="mt-8 p-4">
                <NFTTabs dataTab={historyArray} />
              </div>
            )}
            {provanance && (
              <div className="mt-8 p-4">
                <NFTTabs dataTab={provananceArray} />
              </div>
            )}

            {owner && (
              <div className="mt-8 p-4">
                <NFTTabs dataTab={ownerArray} icon=<MdVerified /> />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;