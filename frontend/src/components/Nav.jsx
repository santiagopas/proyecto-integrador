import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/productos/crear">Agregar Producto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
