import { useState } from "react";
import "./Bottombar.css";

const FAVORITES_KEY = "Unilovers-favorites";

const Favorites = () => {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleShowFavorites = async () => {
    try {
      const favIds = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
      const response = await fetch("/data/products-placeholder.json");
      const allProducts = await response.json();
      const filtered = allProducts.filter(p => favIds.includes(p.id));
      setProducts(filtered);
      setShowPopup(true);
    } catch (error) {
      console.error("Error cargando favoritos:", error);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
   <button
  className="favorites-button"
  onClick={(e) => {
    e.stopPropagation(); // ⛔ evita cierre accidental del menú
    handleShowFavorites();
  }}
>
  Favorites
</button>


      {showPopup && (
        <div className="favorites-popup" onClick={handleClose}>
          <div className="favorites-popup-inner" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>✕</button>
            <h2>Mis favoritos 💖</h2>
            <div className="favorites-list">
              {products.map(product => (
                <div key={product.id} className="favorite-item">
                  <img src={product.img} alt={product.nombre} />
                  <p>{product.nombre}</p>
                </div>
              ))}
              {products.length === 0 && <p>No tenés productos favoritos guardados.</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;
