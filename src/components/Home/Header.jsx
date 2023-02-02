import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="section-header d-flex align-items-center">
        <div className="container bg-transparent">
          <div className="row justify-content-center text-center align-items-center py-5 header-row">
            <div className="col-md-6 col-12 h-100 header-column">
              <div className="my-5 px-5 bg-inherit">
                <div className="">
                  <div className="">
                    <p className="pt-3 text-green">THINK / COMPETE / INNOVATE</p>
                    <h1 className="display-1 fw-bold">TechNITi 2023</h1>
                  </div>
                  <div className="my-5 d-flex justify-content-center gap-3">
                    <a href="https://forms.gle/pN6KCVZX37H7QSHD8" target="_blank" rel="noreferrer" className="">
                      <button
                        type="button"
                        className="btn btn-lg btn-green my-3 px-4 py-1 w-100 h-100"
                      >
                        Buy T-shirts
                      </button>
                    </a>
                    <a href="#about" className="">
                      <button
                        type="button"
                        className="btn btn-lg btn-grey my-3 px-4 py-1 w-100 h-100"
                      >
                        Explore More <i className="fa-solid fa-arrow-right bg-trans"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
