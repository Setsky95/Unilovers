import "./Topbar.css";
import { Link } from "react-router-dom";
const BrandTitle = () => {
    return (
        <div>
          <Link to="/">
          <h1 className='BrandTitleText'>Unilovers</h1>  </Link>
        </div>
    );
};

export default BrandTitle;