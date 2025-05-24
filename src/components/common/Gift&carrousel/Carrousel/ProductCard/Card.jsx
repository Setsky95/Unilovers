import "./card.css";
import Fav from "./Fav";

const Card = ({ nombre, edad, img, precio, id }) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img className="img-product" src={img} alt={nombre} />
        <div className="favIcon-Cointainer">
          <Fav id={id} />
        </div>
      </div>
      <div className="description-container">
        <div className="SpaceBAR"></div>
        <h3 className="description-children">{nombre}</h3>
        <p className="description-children">{edad} años</p>
  <p className="description-children">{precio} $</p>

      </div>
    </div>
  );
};

export default Card;
