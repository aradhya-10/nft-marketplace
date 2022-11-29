import React, { useEffect, useState, useContext } from "react";

//INTRNAL IMPORT
import { Slider, Brand, Loader } from "../components/componentsIndex";
import SearchBar from "../SearchPage/SearchBar";
import { Filter } from "../components/componentsIndex";

import { NFTCard, Banner } from "../collections/collectionIndex";

const searchPage = () => {
  // const { fetchNFTs, setError } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  // useEffect(() => {
  //   try {
  //     fetchNFTs().then((items) => {
  //       setNfts(items.reverse());
  //       setNftsCopy(items);
  //     });
  //   } catch (error) {
  //     setError("Please reload the browser", error);
  //   }
  // }, []);

  // const onHandleSearch = (value) => {
  //   const filteredNFTS = nfts.filter(({ name }) =>
  //     name.toLowerCase().includes(value.toLowerCase())
  //   );

  //   if (filteredNFTS.length === 0) {
  //     setNfts(nftsCopy);
  //   } else {
  //     setNfts(filteredNFTS);
  //   }
  // };

  // const onClearSearch = () => {
  //   if (nfts.length && nftsCopy.length) {
  //     setNfts(nftsCopy);
  //   }
  // };

  // const collectionArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];
  return (
    <div>
      <div className="flex flex-col bg-banner items-center p-5">
        {/* <Banner className="absolute" bannerImage="/img/creatorbackground-2.jpeg" /> */}
        <SearchBar
          // onHandleSearch={onHandleSearch}
          // onClearSearch={onClearSearch}
          className=""
        />
        <Filter />
        </div>
        {
          // nfts.length == 0 ?
          // <Loader /> :
          <NFTCard NFTData={nfts} />
        }
        <Slider />
        <Brand />
      
    </div>
  );
};

export default searchPage;
