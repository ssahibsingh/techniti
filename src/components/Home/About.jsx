import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="section-about" id="about">
        <div className="container">
          <div className="text-center bg-inherit">
            <h1 className="bg-inherit display-5 fw-bold text-uppercase">
              About
            </h1>
            <p className="text-green bg-inherit fs-3 fw-bold">
              What is TechNITi ?
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="about-content my-5">
              <p className="fs-4">
                TechNITi is just not an event but a celebration of colors of
                innovation and management and aims to foster the entrepreneurial
                spirit among the student fraternity. TechNITi is an expression
                of excellence, a platform that aims to be the stepping stone for
                innovative ideas and to turn them into an opportunity to
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
