import "../UpperFooter.css";

const SuscriptionForm = () => {
    return (
        <div className="suscriptionForm-Container">
            <div className="SubformContainer">
                <form className="suscription-emailimput">
                    <input
                        type="email"
                        placeholder="unicorn@lover.com.ar"
                        className="suscription-input"
                        required
                    />
                    <button type="submit" className="suscription-button">
                        ➤
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SuscriptionForm;
