import "./Gift.css";

const PromoResult = ({ onClick, promotionTitle, promotionBenefit }) => {
  return (
    <div className="promo-result">
      <div className="glass-effect"></div>
      <div className="button-text">
        <h2 className="promo-benefit promo-text">{promotionTitle}</h2>
        <h2 className="promo-benefit promo-text">{promotionBenefit}</h2>
        <div className="quitPromoButtonContainer">
          <button className="cart-button" onClick={onClick}>
            <div className="glass-effect"></div>
            <span className="button-text">x</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoResult;
