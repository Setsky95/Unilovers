import "../UpperFooter.css";
import SuscriptionForm from "./SuscriptionForm";
import SuscriptionTitle from "./SuscriptionTitle";
const Newsletterbar = () => {
    return (
        <div className="newsletter-bar-container">
           <div className="suscriptionTitle-Container">
            <SuscriptionTitle />
            </div> 
<div className="SuscriptionForm-Container">
            <SuscriptionForm />

</div>
        </div>
    );
};

export default Newsletterbar;