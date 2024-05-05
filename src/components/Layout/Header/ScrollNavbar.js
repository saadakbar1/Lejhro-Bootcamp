import React, { useState } from "react";
import MainMenu from "../others/MainMenu";
import "./ScrollNavbar.css";
import Logo from "../../../assets/lejhro_logo_red.png";
import MenuLogo from "../../../assets/menu icon.jpg";

function ScrollNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="scroll-navbar">
      <div className="container">
        <a className="navbar-brand" href="https://www.lejhro.com/" target="_blank">
          <img
            src={Logo}
            alt="Lejhro Blue Logo"
            height="30"
            className="img-logo"
          />
        </a>
        <ul className="nav justify-content-end">
          <li className="nav-item lets-talk">
            <a className="nav-link active" aria-current="page" href="https://www.lejhro.com/contact-us" target="_blank">
              <h5 >Let's Talk→</h5>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#menu" onClick={toggleMenu}>
              <img
                src={MenuLogo}
                alt="MenuLogo"
                height="40"
                className="menu-icon"
              ></img>
            </a>
          </li>
        </ul>
      </div>
      <MainMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}

export default ScrollNavbar;
