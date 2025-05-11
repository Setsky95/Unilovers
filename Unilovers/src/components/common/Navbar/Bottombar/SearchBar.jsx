import React from 'react';
import './Bottombar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="search your unicorn"
        className="search-input"/>
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default SearchBar;
