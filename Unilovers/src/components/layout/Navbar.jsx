import Bottombar from "../common/Navbar/Bottombar/Bottombar";
import Topbar from "../common/Navbar/Topbar/Topbar";
import "./layout.css";

const Navbar = () => {
    return (
       <div className="navbar">
            <Topbar />
            <Bottombar />
       </div>
    );
};

export default Navbar;