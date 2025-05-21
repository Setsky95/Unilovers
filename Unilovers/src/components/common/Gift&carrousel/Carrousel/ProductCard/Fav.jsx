import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./card.css";

const Fav = () => {
const handleClick = () => {
  toast(' Added to your favorites 💖🦄 ', {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    className: 'custom-toast',
    bodyClassName: 'custom-toast-body',
  });
};

  return (
    <svg
      className="favIcon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
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
