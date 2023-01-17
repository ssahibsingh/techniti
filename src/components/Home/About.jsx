import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="section-about">
        <div className="container">
          <div className="text-center bg-inherit">
            <h2 className="fs-1 bg-inherit">About</h2>
            <p className="text-green bg-inherit">What is TechNITi?</p>
          </div>
          <div className="row justify-content-center">
            <div className="about-content my-5">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis, placeat explicabo. Aliquid incidunt mollitia est
                praesentium, quod veniam ducimus molestias. Repellendus, animi
                sed?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, numquam nemo. Modi quam voluptatibus, repellat pariatur autem quos eius quia illo ex veritatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
