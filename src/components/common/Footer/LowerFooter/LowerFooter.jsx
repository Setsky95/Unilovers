import "./LowerFooter.css";
import Legal from "./Legal";
import LogoFooter from "./Logo-Footer";

const LowerFooter = () => {
  return (
    <div className="lower-footer-container">
      <div className="Logo-footer">
        <LogoFooter />
      </div>
      <div className="Legal">
        <Legal />
      </div>
    </div>
  );
};

export default LowerFooter;
