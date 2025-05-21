import React, { useState } from "react";
import "./Bottombar.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menuContainer">
      <div className="burger-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>

      <div className={`side-menu ${isOpen ? "visible" : ""}`}>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
          <li>Mi cuenta</li>
          <div className="HornSale-container-mobile">
            <img
              src="/img/media/horn-sale-logo.png"
              alt="Horn Sale"
              className="horn-sale-img-mobile"
            />
          </div>

          <button
            className="burger-x-button "
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </button>
        </ul>
      </div>

      <div className="categories-Container" onClick={() => setIsOpen(!isOpen)}>
        <p className="">categories</p>
      </div>
    </div>
  );
};

export default BurgerMenu;
