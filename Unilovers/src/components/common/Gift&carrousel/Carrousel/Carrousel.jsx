import CarrouselTitle from "./CarrouselTitle";
import ProductsCards from "./ProductCard/ProductsCards";


const Carrousel = () => {
    return (
      <div className="Carrousel-Container">
          <div className="CarrouselTitle-Container">  <CarrouselTitle/>   </div>
          <div className="ProductCard-Cointaner"><ProductsCards /> </div></div>
    );
};

export default Carrousel;