import LogoNavbar from "./LogoNavbar";
import "./Topbar.css";
import BrandTitle from "./BrandTitle";  
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logoNavbarCointeiner">
       <LogoNavbar /> </div>
       <div className="BrandTitleContainer">
        <BrandTitle />
        </div> 


    </div>
  );
};

export default Topbar;
