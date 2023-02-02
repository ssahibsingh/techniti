import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="section-about" id="about">
        <div className="container">
          <div className="text-center bg-inherit">
            <h1 className="bg-inherit display-5 fw-bold text-uppercase">About</h1>
            <p className="text-green bg-inherit">What is TechNITi ?</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-8 col-12 text-center my-5">
              <p>
                TechNITI is a one of its kind event that goes far beyond just
                being an event. It is celebration of colors of innovation and
                management and aims to foster the entrepreneurial spirit and
                motivate the engineeers among us. TechNITI is an expression of
                excellence, a platform that aims to be the steppingstone for
                innovative ideas to turn them into an opportunity to
                revolutionize the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
