import { useEffect, useRef, useState } from "react";
import Card from "../Gift&carrousel/Carrousel/ProductCard/Card";
import "./LongCarrousel.css";

const LongCarrouselCards = () => {
  const carouselRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 100;
    }

    fetch("/data/products-placeholder.json")
      .then((response) => {
        if (!response.ok) throw new Error("Error al cargar productos");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">No se pudieron cargar los productos.</div>;

  return (
    <div className="carousel-wrapper">
      
 <button className="nav-button left" onClick={scrollLeft}>
  &#10094;
</button>

      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-track">
          {products.map((item) => (
            <Card
              key={item.id}
              nombre={item.nombre}
              edad={item.edad}
              img={item.img}
              precio={item.precio}
              id={item.id}

            />
          ))}
        </div>
      </div>

<button className="nav-button right" onClick={scrollRight}>
  &#10095;
</button>
    </div>
  );
};

export default LongCarrouselCards;
