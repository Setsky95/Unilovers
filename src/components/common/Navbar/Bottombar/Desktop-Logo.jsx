import { Link } from "react-router-dom";

const DesktopLogo = () => {
    return (
        <div className="desktop-logo-container">
            <Link to="/">
                <img  className="img-logo-desktop-img" src="/img/media/logo-desktop.png"  alt="Unilovers Logo" />
            </Link>

        </div>
    );
};

export default DesktopLogo;