import React from 'react';

const OpenButton = ({ onClick }) => {
  return (
    <div className="buttonContainer">
      <button className="Gift-button" onClick={onClick}>
        Open
      </button>
    </div>
  );
};

export default OpenButton;
