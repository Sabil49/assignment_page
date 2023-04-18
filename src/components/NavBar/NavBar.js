import { useLocation } from "react-router-dom";
import logo_side from "../../assets/images/logo_side.png";
import apps from "../../assets/images/apps.png";
import bootstrap from "../../assets/images/bootstrap.png";
import chart from "../../assets/images/chart.png";
import dashboard from "../../assets/images/dashboard.png";
import plugin from "../../assets/images/plugin.png";

const NavBar = () => {
    
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <img src={logo_side} alt="Hotel-Booking" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <img src={dashboard} alt="Dashboard" />
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <img src={apps} alt="Apps" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <img src={chart} alt="Chart" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <img src={bootstrap} alt="Bootstrap" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <img src={plugin} alt="Plugin" />
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
