import Campains from "../components/common/Panel/Campains";
import Catalog from "../components/common/Panel/Catalog";

const Panel = () => {
    return (
        <div className="Panel-Container">
      <div className="Campains-Container"><Campains /></div>
            <div className="Campains-Container"><Catalog /></div>

        </div>
    );
};

export default Panel;