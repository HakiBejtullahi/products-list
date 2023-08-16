import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ searchInput, setSearchInput, searchProducts }) => {
  return (
    <form className='search-form'>
      <input
        type='search'
        placeholder='search'
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          searchProducts();
        }}
        className='search-input'
      />
      <button type='submit' className='btn-icon'>
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default SearchBar;
