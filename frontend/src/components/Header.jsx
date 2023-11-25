import Nav from "./Nav";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header-logo">CTD</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
