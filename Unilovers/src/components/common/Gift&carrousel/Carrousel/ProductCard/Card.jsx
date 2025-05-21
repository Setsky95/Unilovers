import "./card.css";
import Fav from "./Fav";

const Card = () => {
  
  return (
    <div className="card-container">

      <div className="img-container">
        <img className="img-product"
          src="/img/media/Products/uni-1.png"
          alt="Product"
        />
          <div className="favIcon-Cointainer">
<Fav/> 
</div>

      </div>
      <div className="description-container">
              <div className="SpaceBAR"></div>

        <h3 className="description-children">Sunshine</h3>
        <p className="description-children">3 years old</p>
        <p class="price description-children">$14.99</p>
      </div>
    </div>
  );
};

export default Card;
