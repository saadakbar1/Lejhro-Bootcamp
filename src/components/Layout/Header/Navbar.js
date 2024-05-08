import React, { useState } from "react";
import MainMenu from "../others/MainMenu";
import "./Navbar.css";
import Logo from "../../../assets/lejhro_logo_white.png";
import MenuLogo from "../../../assets/menu icon.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="navbar">
        <div className="container">
          <a
            className="navbar-brand"
            href="https://www.lejhro.com/"
            target="_blank"
          >
            <img
              src={Logo}
              alt="Lejhro Red Logo"
              height="30"
              className="img-logo"
            />
          </a>
          <a href="https://www.bootcamp.lejhro.com/data-science-course-training">
            <button className=" program btn btn-outline-light nav-item">PROGRAMS</button>
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a
                className="he3 nav-link active"
                aria-current="page"
                href="https://www.bootcamp.lejhro.com/refer-and-earn"
                style={{ color: "whitesmoke" }}
              >
                Refer and earn
              </a>
            </li>
            <li className="nav-item">
              <a
                className="he3 nav-link active"
                aria-current="page"
                href="https://www.bootcamp.lejhro.com/events"
                style={{ color: "whitesmoke" }}
              >
                Free Masterclass
              </a>
            </li>
            <li className="nav-item">
              <a
                className=" he3 nav-link active"
                aria-current="page"
                href="https://www.bootcamp.lejhro.com/enterprise"
                style={{ color: "whitesmoke" }}
              >
                Enterprise
              </a>
            </li>
            <li className="nav-item">
              <a className="sidem nav-link" href="#menu" onClick={toggleMenu}>
                <img
                  src={MenuLogo}
                  alt="MenuLogo"
                  height="30"
                  className="menu-icon"
                  style={{ borderRadius: "50%" }}
                ></img>
              </a>
            </li>
          </ul>
        </div>
        <MainMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      </div>
      <div>
      <h1 className="bootcamp-heading">Industry's #1 Online Bootcamp</h1>
      </div>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <div>
          <img
            src="https://www.bootcamp.lejhro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbootcamp-banner.2e73443e.png&w=1200&q=75"
            alt="Bootcamp Banner"
            className="banner"
          />
        </div>
        <div className="form-container bg-white p-3 mb-3 mb-md-0">
          <h2 className="bookk">Book a FREE Live Class!</h2>
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phoneNumber" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="experience" className="form-label">Years of Experience</label>
                <input type="number" className="form-control" id="experience" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button type="submit" className="live btn btn-submit">Continue Booking Live Classes</button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <a href="https://www.bootcamp.lejhro.com/data-science-course-training">
            <button className="explore btn btn-outline-light nav-item">Explore</button>
          </a>
        </div>
      </div>
      {/* Table-like card section */}
      <div className="cardd container mt-2">
  <div className="row">
    <div className="col-md-6">
      <div className="card bg-white rounded p-3">
        <div className="d-flex justify-content-between">
          <span className="table-heading a72">72%</span>
          <span className="table-heading atop1">Top 1%</span>
          <span className="table-heading a200">2,00,000+</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="table-content">Avg. CTC Hike</span>
          <span className="table-content">Industry Instructors</span>
          <span className="table-content">Career Transitions</span>
        </div>
      </div>
    </div>
  </div>
</div>
        
      
    </div>
  );
}

export default App;
