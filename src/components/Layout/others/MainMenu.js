import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkype,
  faFacebook,
  faLinkedin,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../../assets/lejhro_logo_red.png";
import "./MainMenu.css";

function MainMenu({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
      <div className={`main-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-header">
          <div className="menu-logo">
            <img src={Logo} alt="Lejhro Red Icon" height="40" />
          </div>
          <div className="menu-close-button" onClick={onClose}>
            X
          </div>
        </div>
        <ul className="menu-links">
          <li>
            <a href="https://www.bootcamp.lejhro.com/refer-and-earn" target="_blank">
            Refer and earn
            </a>
          </li>
          <li>
            <a href="https://www.bootcamp.lejhro.com/events" >
            Free Masterclass
            </a>
          </li>
          <li>
            <a href="https://www.bootcamp.lejhro.com/enterprise">
            Enterprise
            </a>
          </li>
          <li>
            <a href="https://www.recruit.lejhro.com/" target="_blank">
            Lejhro Recruiter
            </a>
          </li>
          <li>
            <a href="https://www.bootcamp.lejhro.com/blogs" >
            Blogs
            </a>
          </li>
          <li>
            <a href="https://www.bootcamp.lejhro.com/resources" >
              Resources
            </a>
          </li>
          
          <li className="social-icons-container">
            <a href="https://twitter.com/lejhrobootcamp" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a href="https://www.facebook.com/lejhrobootcamp" target="_blank">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/lejhro-bootcamp" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCBSGr_lQey13KkXhxHS0Y_w" target="_blank">
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            </a>
            
          </li>
          <li className="copyright-text">
            © 2024 LEJHRO. All Rights Reserved
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainMenu;
