import React from 'react';
import "./Gift.css";

const CodeBar = ({ inputCode, setInputCode }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="type your code"
        className="search-input"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
      />
    </div>
  );
};

export default CodeBar;
