import React from "react";
import "./Sponsor.css";
const Sponsor = () => {
  return (
    <>
      <div className="section-sponsor1">
        <div className="container bg-inherit py-4">
          <div className="row justify-content-center align-items-center my-5 p-5 bg-inherit">
            <div className="col-md-6 col-sm-12 col-12 bg-inherit">
                <p className="text-dark fw-bold bg-inherit">THINK / COMPETE / INNOVATE</p>
                <h4 className="display-3 bg-inherit text-dark fw-bold">Want to get involved?</h4>
            </div>
            <div className="col-md-6 col-sm-12 col-12 text-end bg-inherit my-5">
              <a href="tel:+919795331310" className="mx-5 bg-inherit"><button className="btn btn-bdark px-4 py-3">Contact Us </button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsor;
