// SearchBar.js

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <label htmlFor="search" className="visually-hidden">Search</label>
      <div className="search-input-container">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          className="form-control"
          id="search"
          aria-describedby="helpId"
          placeholder="Search here"
        />
      </div>
    </div>
  );
};

export default SearchBar;
