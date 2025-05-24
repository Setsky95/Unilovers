import LongCarrouselCards from "./LongCarrouselCards";
import LongCarrouselTitle from "./LongCarrouselTitle";
import "./LongCarrousel.css";
const LongCarrousel = () => {
  return (
    <div className="longCarrouselContainer">
      <div className="longCarrouselTitle-Container"><LongCarrouselTitle /></div>
      <div className="longCarrouselCards-Container"> <LongCarrouselCards /> </div>
    </div>
  );
};

export default LongCarrousel;
