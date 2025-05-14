import GiftTitle from "./GiftTitle";
import CodeBar from "./codeBar";
import OpenButton from "./openButton";
import GiftIcon from "./Gifticon";
import "./Gift.css";

const Gift = () => {
  return (
    <div className="Gift-container">
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
          <CodeBar />
        </div>
        <div className="openButton">
          <OpenButton />
        </div>
      </div>
    </div>
  );
};

export default Gift;
