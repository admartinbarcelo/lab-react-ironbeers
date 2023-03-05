import { Link } from "react-router-dom";
import home from "../assets/home.png";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={home} alt="header" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
