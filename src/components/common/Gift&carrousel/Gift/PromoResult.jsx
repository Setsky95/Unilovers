import "./Gift.css";

const PromoResult = ({ onClick,promotionTitle, promotionBenefit }) => {
  return (
    <div className="promo-result">
      <h2 className="promo-benefit"> {promotionTitle}</h2>
      <h2 className="promo-benefit"> {promotionBenefit}</h2>
      <div className="quitPromoButtonContainer">
        <button className="quitPromoButton" onClick={onClick} >x</button>
      </div>
    </div>
  );
};

export default PromoResult;
