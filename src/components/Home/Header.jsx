import React from "react";
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
                  <div className="my-5">
                    <a href="#about">
                      <button
                        type="button"
                        className="btn btn-lg btn-green my-3 px-4 py-3"
                      >
                        Register for Free
                      </button>
                    </a>
                    <a href="#about">
                      <button
                        type="button"
                        className="btn btn-lg btn-grey my-3 px-4 py-3"
                      >
                        Explore More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-12 h-100"> */}
            {/* <div className="">
                <div className="text-center">
                  <img
                    className=""
                    src="/images/main-svg.svg"
                    alt=""
                    width={332}
                    height={400}
                    priority
                  />
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
