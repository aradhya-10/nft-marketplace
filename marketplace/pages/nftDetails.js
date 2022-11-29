import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/componentsindex";
import nftDetailsPage from "../nftdetailscomp/nftDetailsPage";

//IMPORT SMART CONTRACT DATA
// import { nftMarketplaceContext } from "../Context/nftMarketplaceContext";
const nftDetails = () => {
  const { currentAccount } = useContext(nftMarketplaceContext);

  const [nft, setnft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  });

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setnft(router.query);
  }, [router.isReady]);

  return (
    <div>
      <nftDetailsPage nft={nft} />
      <Category />
      <Brand />
    </div>
  );
};

export default nftDetails;