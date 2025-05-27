import React, { useState } from "react";
import "./Bottombar.css";
import Favorites from "./Favorites";
import { Link } from "react-router-dom";

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
       </ul>


      <Favorites />
          <Link to="/panel">
            <div className="HornSale-container-mobile">
              <img
                src="/img/media/horn-sale-logo.png"
                alt="Horn Sale"
                className="horn-sale-img-mobile"
              />
            </div>
          </Link>

      <button
            className="burger-x-button "
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </button>

      </div>

      <div className="categories-Container" onClick={() => setIsOpen(!isOpen)}>
        <p className="categories-word">categories</p>
      </div>
    </div>
  );
};

export default BurgerMenu;
