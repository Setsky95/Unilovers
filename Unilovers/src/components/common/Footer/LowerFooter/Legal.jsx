import "./LowerFooter.css";

const Legal = () => {
    return (
        <div className="legal-text-container">
            <p className="legal">&copy; {new Date().getFullYear()} Unilovers. All rights reserved | La Plata, Buenos Aires, Argentina..</p>
        </div>
    );
};

export default Legal;