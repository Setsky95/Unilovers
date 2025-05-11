import React, { useState } from 'react';
import './Bottombar.css'; 

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="burger-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`side-menu ${isOpen ? 'visible' : ''}`}>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
          <li>Mi cuenta</li>
        </ul>
              <button className="burger-icon" onClick={() => setIsOpen(false)}>  X    </button>


      </div>
    </>
  );
};

export default BurgerMenu;