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
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-2 mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/event">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-inherit">
            <button className="btn btn-green px-4">Register</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarN;
