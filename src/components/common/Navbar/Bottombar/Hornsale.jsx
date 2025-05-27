import "./Bottombar.css";
import { Link } from "react-router-dom";

const HornSale = () => {
    return (
        <Link to="/panel">
            <div className='HornSale-container'>
                <img src="/img/media/horn-sale-logo.png" alt="Horn Sale" className="horn-sale-img" />
            </div>
        </Link>
    );
};

export default HornSale;