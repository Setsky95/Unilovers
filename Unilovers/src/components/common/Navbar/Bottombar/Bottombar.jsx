import BurgerMenu from "./BugerMenu";
import SearchBar from "./SearchBar";
import BagBadge from "./BagBadge";
import DesktopLogo from "./Desktop-Logo";
import HornSale from "./Hornsale";
import './Bottombar';

const Bottombar = () => {
  return (
    <div className="BottombarContainer">
      <div className="Desktop-Logo"><DesktopLogo /></div>
      <div className="BugerMenu"> <BurgerMenu /></div>
      <div className="right-botoombar-container">
        <div className="hornsale"><HornSale /></div>
      <div className="SeachBar"><SearchBar /></div>
      <div className="BagBadge"><BagBadge /></div>
    </div></div>
  );
};

export default Bottombar;
