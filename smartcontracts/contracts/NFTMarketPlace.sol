// SPDX-License-Identifier: Unlicnesed
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "hardhat/console.sol";

error Unauthorized();
error NilTransfer();
error UnacceptableTransfer();

contract NFTMarketPlace is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    address public immutable owner;

    uint256 listingPrice = 0.00001 ether;
    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event idMarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );
    mapping(uint256 => MarketItem) private idMarketItem;

    constructor() ERC721("NFT Metaverse Token", "MyNFT") {
        owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        if (msg.sender != owner) {
            revert Unauthorized();
        }
        _;
    }

    function updateListingPrice(
        uint256 _listingPrice
    ) public payable onlyOwner {
        listingPrice = _listingPrice;
    }

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    function createMarketItem(uint256 tokenId, uint256 price) private {
        if (price <= 0) revert NilTransfer();
        if (msg.value != listingPrice) revert UnacceptableTransfer();

        _transfer(msg.sender, address(this), tokenId);

        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        emit idMarketItemCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );
    }

    //Create Token for the NFT.
    function createToken(string memory tokenURI, uint256 price) public payable {
        uint256 newTokenId = _tokenIds.current();

        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        createMarketItem(newTokenId, price);

        _tokenIds.increment();
    }

    //Resell the NFT
    //Contract becomes the NFt's owner.
    function resellToken(uint256 tokenId, uint256 price) public payable {
        if (idMarketItem[tokenId].owner != msg.sender) {
            revert Unauthorized();
        }
        if (msg.value != listingPrice) {
            revert UnacceptableTransfer();
        }
        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));

        _itemsSold.decrement();

        _transfer(msg.sender, address(this), tokenId);
    }

    //createMarketSale

    function createMarketSale(uint256 tokenId) public payable {
        uint256 price = idMarketItem[tokenId].price;
        if (msg.value != price) revert UnacceptableTransfer();

        // idMarketItem[tokenId].seller = idMarketItem[tokenId].owner;
        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;
        //Should be seller
        idMarketItem[tokenId].owner = payable(address(0));

        _transfer(address(this), msg.sender, tokenId);
        _itemsSold.increment();
        payable(owner).transfer(listingPrice);
        payable(idMarketItem[tokenId].seller).transfer(msg.value);
    }

    //Fetch market unsold data.
    function fetchMarketItem() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 unSoldItemCount = _tokenIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unSoldItemCount);

        for (uint256 i = 0; i < itemCount; i++) {
            if (idMarketItem[i + 1].owner == address(this)) {
                MarketItem storage currentItem = idMarketItem[i + 1];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    //Purchase Item
    function fetchMyNFT() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }
        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    //Single User Items
    function fetchUserItems() public view returns (MarketItem[] memory ){
      uint256 totalCount = _tokenIds.current();
      uint256 itemCount = 0;
      uint256 currentIndex = 0;

      for(uint256 i = 0; i < totalCount; i++){
        if(idMarketItem[i+1].seller == msg.sender){
          itemCount += 1;          
        }
      }

      MarketItem[] memory items = new MarketItem[](itemCount);
      for(uint256 i = 0; i < totalCount; i++){
        if(idMarketItem[i+1].seller == msg.sender){
          uint256 currentId = i+1;
          MarketItem storage currentItem = idMarketItem[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return items;

    }
}
