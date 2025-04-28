import "./nav.css"; // Import the CSS file
import { FaLocationDot } from "react-icons/fa6";
// import { useState } from "react"; // Import useState from React to manage state
import Switch from "./itemsNav/Switch";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../image/logo_screen.png"; // Import the logo image



const Nav = () => {
 
 
  return (
    <nav className="nav">
      <div className="logo"><img src={logo} alt="" /></div>

      <ul className="nav-links">
        <li>
          <a href="#home" className="link">
            Home
          </a>
        </li>
        <li>
          <a href="#contact" className="link">
            Contact
          </a>
        </li>
        <li>
          <a href="#services" className="link">
            Services
          </a>
        </li>
        <li>
          <a href="#shop" className="link">
            Shop
          </a>
        </li>
      </ul>

      <div className="right-section">
      <div className="language-buttons">
        <Switch />
        </div>
        <div className="delivery">
          Delivery to <span className="Flag-Name"> Egypt</span>
          <span className="icon-location">
            <FaLocationDot />
          </span>{" "}
        </div>


        <div className="cart">
        <div className="cart-text"> <span>your</span>Cart</div>
        <FaShoppingCart className="cart-icon" />
        <span className="cart-count">0</span>
         </div>
        
        
      </div>
    </nav>
  );
};

export default Nav;
