import Nav from "./Nav";
import "../styles/components/Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <header className={`header ${theme}`}>
      <Link to="/">
        <h1 className="header-logo">CTD</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
