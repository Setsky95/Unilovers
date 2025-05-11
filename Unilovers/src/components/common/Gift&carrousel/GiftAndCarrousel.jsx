import React from "react";
import Gift from "./Gift/Gift";
import Carrousel from "./Carrousel/Carrousel";
import "./GiftAndCarrousel.css";

const GiftAndCarrousel = () => {
  return (
    <div className="GiftAndCarrouselContainer">
      <div className="Gift"><Gift /></div>
      <div className="Carrousel"><Carrousel /></div>
    </div>
  );
};

export default GiftAndCarrousel;
