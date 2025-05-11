import GiftTitle from "./GiftTitle";
import CodeBar from "./codeBar";
import OpenButton from "./openButton";

const Gift = () => {
    return (
        <div className="Gift-container">
            <div className="GiftTitle"><GiftTitle /></div>
           <div className="codeBar"><CodeBar /></div>
           <div className="openButton"><OpenButton /></div>
        </div>
    );
};

export default Gift;