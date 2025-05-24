import MainSlider from "../components/common/MainSlider/MainSlider";
import GiftAndCarrousel from "../components/common/Gift&carrousel/GiftAndCarrousel";
import LongCarrousel from "../components/common/LongCarrousel/LongCarrousel";
const Home = () => {
    return (
        <div>
            <div className="mainSlider"><MainSlider /></div>
            <div className="GiftAndCarrousel"><GiftAndCarrousel /></div>
            <div className="LongCarrousel"><LongCarrousel /></div>
        </div>
    );
};

export default Home;