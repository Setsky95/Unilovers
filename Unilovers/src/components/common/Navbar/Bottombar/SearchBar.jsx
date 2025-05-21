import React from 'react';
import './Bottombar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="search your unicorn"
        className="search-input"/>
   <span className="search-icon">
  <svg
    className="lupa-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <line x1="16" y1="16" x2="22" y2="22" stroke="currentColor" strokeWidth="2.5" />
  </svg>
</span>
    </div>
  );
};

export default SearchBar;
