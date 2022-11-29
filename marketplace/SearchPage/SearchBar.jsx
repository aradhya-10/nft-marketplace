import React, { useEffect, useState } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

const SearchBar = ({ onHandleSearch, onClearSearch }) => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  return (
    <div className='w-full'>
      <div className='w-2/5 mt-2 mb-4 mx-auto bg-blue-300 text-white flex rounded-lg items-center shadow-md shadow-gray-300'>
        <BsSearch className='text-2xl py-2 px-3 cursor-pointer text-blue-300' />
        <input
          type="text"
          placeholder="Enter keywords"
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
          className = "w-4/5 border-0 outline-none p-4 bg-slate-800 placeholder-shown:text-blue-300 text-lg"
        />
        <BsArrowRight className={Style.SearchBar_box_icon} />
      </div>
    </div>
  );
};

export default SearchBar;