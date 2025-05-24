import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./card.css";

const FAVORITES_KEY = "Unilovers-favorites";

const Fav = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  

  useEffect(() => {
    const syncFavorite = () => {
      const existing = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
      setIsFavorite(existing.includes(id));
    };

    syncFavorite(); // primera vez

    // Escuchamos cambios globales
    window.addEventListener("favorites-updated", syncFavorite);
    return () => window.removeEventListener("favorites-updated", syncFavorite);
  }, [id]);

  const handleClick = () => {
    if (!id || typeof id !== 'string') {
      console.warn("⚠️ ID inválido en <Fav />");
      return;
    }

    const existing = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];

    if (existing.includes(id)) {
      // ❌ Quitar de favoritos
      const updated = existing.filter(favId => favId !== id);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
      setIsFavorite(false);
      toast('Removed from your favorites 💔', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
      });
    } else {
      // ✅ Agregar a favoritos
      const updated = [...existing, id];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
      setIsFavorite(true);
      toast('Added to your favorites 💖🦄', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
      });
    }

    // 🔄 Notificar a todos los favs que algo cambió
    window.dispatchEvent(new Event("favorites-updated"));
  };

  return (
<svg
  className="favIcon"
  xmlns="http://www.w3.org/2000/svg"
  fill={isFavorite ? "white" : "transparent"}
  stroke="white"
  strokeWidth="1.5"
  viewBox="0 0 24 24"
  onClick={handleClick}
  style={{ cursor: 'pointer' }}
>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
               2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
               C13.09 3.81 14.76 3 16.5 3
               19.58 3 22 5.42 22 8.5
               c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
};

export default Fav;
