import { Link } from "react-router-dom";

const LogoNavbar = () => {
    return (
      
          <div className="logoNavbar">
            <Link to="/Panel">
           <img className="logoNavbarImg" src="/img/media/logo.png" alt="Logo Uni" /></Link>
          </div>
    );
};

export default LogoNavbar;