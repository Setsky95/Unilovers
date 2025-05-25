import React, { useState } from "react";
import Confetti from "react-confetti";
import GiftTitle from "./GiftTitle";
import CodeBar from "./codeBar";
import OpenButton from "./openButton";
import GiftIcon from './GiftIcon.jsx';
import PromoResult from "./PromoResult";
import "./Gift.css";

const Gift = () => {
  const [inputCode, setInputCode] = useState("");
  const [promotion, setPromotion] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch("/data/promotions.json");
      const data = await response.json();
      const match = data.find(
        (promo) => promo.code.toLowerCase() === inputCode.toLowerCase()
      );
      setPromotion(match || null);
      setShowConfetti(!!match);

      if (match) {
        setTimeout(() => setShowConfetti(false), 5000);
      }
    } catch (error) {
      s;
      console.error("Error fetching promotions:", error);
    }
  };

  return (
    <div className="Gift-container" id="Gift-container">
      <div className="Upper-bar">
        <div className="GiftTitle-container">
          <GiftTitle />
        </div>
        <div className="Gift-icon">
          <GiftIcon />
        </div>
      </div>

      <div className="Lower-bar">
        <div className="codeBar">
          <CodeBar inputCode={inputCode} setInputCode={setInputCode} />
        </div>
        <div className="openButton">
          <OpenButton onClick={handleSearch} />
        </div>
      </div>

      {promotion && (
        <div className="promo-result-container">
          {showConfetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={400}
              recycle={false}
              gravity={0.1}
              wind={0.01}
              opacity={1}
              colors={["#ffcaff", "#a0e7e5", "#b4f8c8", "#fbe7c6", "#ffafcc"]}
              style={{
                zIndex: 9999,
                pointerEvents: "none",
                position: "fixed",
                top: 0,
                left: 0,
              }}
            />
          )}
          <PromoResult
            onClick={() => setPromotion(null)}
            promotionTitle={promotion.title}
            promotionBenefit={promotion.benefit}
          />
        </div>
      )}
    </div>
  );
};

export default Gift;
