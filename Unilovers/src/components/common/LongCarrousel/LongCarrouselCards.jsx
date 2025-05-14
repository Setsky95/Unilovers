import { useEffect, useRef } from "react";
import Card from "../Gift&carrousel/Carrousel/ProductCard/Card";
import "./LongCarrousel.css";

const LongCarrouselCards = () => {
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 100;
    }
  }, []);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="carousel-wrapper">
      <button className="nav-button left" onClick={scrollLeft}>
        ‹
      </button>

      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-track">
          {[...Array(15)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>

      <button className="nav-button right" onClick={scrollRight}>
        ›
      </button>
    </div>
  );
};

export default LongCarrouselCards;
