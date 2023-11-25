import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/components/Nav.css";
import "../styles/components/MobileNav.css";
import { AiOutlineMenuFold } from "react-icons/ai";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="menu-icon" onClick={toggleMobileMenu}>
      <AiOutlineMenuFold />
      </div>
      <ul className={`navUl ${isMobileMenuOpen ? "show" : ""}`}>
        <li className="navLi">
          <Link to="/">Inicio</Link>
        </li>
        <li className="navLi">
          <Link to="/productos">Productos</Link>
        </li>
        <li className="navLi">
          <Link to="/productos/crear">Agregar Producto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
