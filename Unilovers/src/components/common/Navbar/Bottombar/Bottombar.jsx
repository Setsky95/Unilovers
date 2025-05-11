import BurgerMenu from "./BugerMenu";
import SearchBar from "./SearchBar";
import BagBadge from "./BagBadge";
const Bottombar = () => {
  return (
    <div className="BottombarContainer">
      <div className="BugerMenu"> <BurgerMenu /></div>
      <div className="SeachBar"><SearchBar /></div>
      <div className="BagBadge"><BagBadge /></div>
    </div>
  );
};

export default Bottombar;
