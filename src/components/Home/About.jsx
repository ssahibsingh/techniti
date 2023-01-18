import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="section-about">
        <div className="container">
          <div className="text-center bg-inherit">
            <h2 className="fs-1 bg-inherit">About</h2>
            <p className="text-green bg-inherit">What is TechNITi ?</p>
          </div>
          <div className="row justify-content-center">
            <div className="about-content my-5">
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
