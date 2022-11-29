import React, { useEffect, useState } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

const SearchBar = ({ onHandleSearch, onClearSearch }) => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  // useEffect(() => {
  //   if (search) {
  //     onHandleSearch(search);
  //   } else {
  //     onClearSearch();
  //   }
  // }, [search]);

  return (
    <div className='w-4/5 mx-auto'>
      <div className='w-2/5 mt-2 mb-4 px-8 mx-auto text-black bg-blue-300 flex rounded-lg items-center shadow-md shadow-gray-300'>
        <BsSearch className='mx-12 z-[2222] cursor-pointer' />
        <input
          type="text"
          placeholder="Enter keywords"
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
          className="w-4/5 border-0 outline-none p-4 bg-transparent text-white  text-lg"
        />
        <BsArrowRight className='' />
      </div>
    </div>
  );
};

export default SearchBar;