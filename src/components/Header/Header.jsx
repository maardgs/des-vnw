import { Link } from "react-router-dom";
import { StyledHeader } from "./HeaderStyle";
import logo from "../../assets/starbucks-logo.svg";

function Header() {
    return (
        <StyledHeader>
            <img src={logo} alt="Logomarca Starbucks" className="logo" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/novidades">Novidades</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    );
}

export default Header;
