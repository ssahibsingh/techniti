import React from "react";

import { Link } from "react-router-dom";
// import logo from "../files/logo2.png";

const NavbarN = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <Link className="navbar-brand mx-3 mt-1" to="/">
            {/* <img src="/logop.webp" alt="Logo" width={155} height={40} /> */}
            TechNITi
          </Link>
          <button
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-2 mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <span
                    className="bg-trans"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent "
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <span
                    className="bg-trans"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                  >
                    About
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/event"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <span
                    className="bg-trans"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                  >
                    Events
                  </span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/team"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <span
                    className="bg-trans"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                  >
                    Team
                  </span>
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div className="bg-inherit register-button">
            <Link to="/event" className="btn btn-green px-4">
              Register
            </Link>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default NavbarN;
