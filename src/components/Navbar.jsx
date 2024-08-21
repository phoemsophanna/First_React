import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { products_use } from "../page/Context";

const Navbar = () => {
  const { toggle, toggleHandler } = products_use();
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="" />
      </div>
      <span className="toggle">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 1024 1024"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleHandler}
        >
          <path
            d="M64 192h896v76.8H64V192z m0 281.6h896v76.8H64V473.6z m0 281.6h896V832H64v-76.8z"
            fill="#444"
          />
        </svg>
      </span>
      <ul className={toggle ? "active" : null}>
        <li>
          <NavLink className="nav-link" onClick={toggleHandler} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="accessories"
            className="nav-link"
            onClick={toggleHandler}
          >
            Accessories
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" onClick={toggleHandler} to="about">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
