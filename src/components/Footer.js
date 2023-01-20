import React from "react";
import { FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <div className="container my-3">
          <div className="row d-flex justify-content-between">
            <p className="col-md-4 col-sm-12 col-12 text-center">
              Copyright &copy; {year} TechNITi, NIT Jalandhar
            </p>
            <div className="col-md-4 col-sm-12 col-12 text-center">
              <ul className="list-unstyled d-flex  justify-content-center align-items-center gap-3 home-icons">
                <li className="">
                  <a
                    href="https://www.instagram.com/techniti_nitj/?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiInstagram />
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://www.linkedin.com/in/technitij2k23/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiLinkedin />
                  </a>
                </li>
                <li className="">
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <FiFacebook />
                  </a>
                </li>
              </ul>
            </div>
            <p className="col-md-4 col-sm-12 col-12 text-center">
              Developed with ❣️ By{" "}
              <a
                href="https://github.com/ssahibsingh"
                target="_blank"
                rel="noreferrer"
                className="text-green"
              >
                Sahib Singh
              </a>
              &
              <a
                href="https://github.com/Nitesh2905"
                target="_blank"
                rel="noreferrer"
                className="text-green"
              >
                Nitesh Yadav
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
