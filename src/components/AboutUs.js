import React from "react";
import tta from "../files/tta.png";
import nitj from "../files/nitj.png";
import iic from "../files/iic.png";
import rulesandregulation from "../files/pdf/rulesandregulation.pdf";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="aboutuspage text-center">
        <h1 className="fw-bold text-uppercase">About Us </h1>
        {/* <p className="icon" style={{ fontSize: "2.1rem" }}>< AiOutlineDoubleRight /></p> */}
        <div>
          <h2 className="mt-5 fw-bold text-color">TechNITi 2023</h2>
          <p className="fw-normal aboutfont">
            North zone’s biggest annual techno-managerial fest is being held
            from 25<sup>th</sup> to 28<sup>th</sup> February 2023 on its campus
            and we’d love to see you among us at the event. There’s so much in
            it for everyone, from coding geeks to start-up enthusiasts, from
            gamers to designers, from drone shows to ATV races, from robo wars
            to a fashion parade. It’ll be one stop for all the technological and
            design enthusiasts from all domains. Teams from colleges and
            universities across the nation will be participating in the events.
            The prizes for winners are as exciting as the competitions. We thus
            invite you to complement us in our celebration of technology.
          </p>
        </div>
        <div>
          <h2 className="mt-5 fw-bold text-color ">NIT Jalandhar</h2>
          <p className="fw-normal aboutfont">
            Dr.B.R.Ambedkar National Institute of Technology was established in
            the year 1987 as Regional Engineering College and was given the
            status of the National Institute of Technology (Deemed University)
            by the Govt. of India on October 17, 2002, under the aegis of the
            Ministry of Human Resource Development, Govt of India, it has
            declared the institute as an Institute of National Importance under
            the act of Parliament 2007. According to the NIRF ranking, the
            Institute has been ranked 42<sup>nd</sup> among all engineering
            colleges.
          </p>
          <a
            href="https://www.nitj.ac.in/"
            className=""
            rel="noreferrer"
            target="_blank"
          >
            <button className="btn  d-flex btn-green mx-auto w-125 rounded">
              Visit to Know More
            </button>
          </a>
        </div>
        <div>
          <h3 className="mt-5 fw-bold text-color">How to Reach us ?</h3>
          <p className="fw-normal aboutfont">
            The city of Jalandhar is situated between the rivers Sutlej and Beas
            on NH-1. It is one of the important towns of Punjab. It is an
            internationally renowned center for sports leather goods and hand
            tools. The city is 370 km from Delhi en route to Amritsar and is
            easily accessible from Delhi by train or bus. The Institute is
            located on GT Road ByPass at a distance of 14 Km from Jalandhar city
            railway station and 15 Km from Jalandhar Cantt railway station Auto
            rickshaw and taxi services are available regularly from the railway
            station.
          </p>
        </div>
        <div>{/* <h3 className="text-color  mt-5">Organized By</h3> */}</div>
        <div className="mt-5">
          <div>
            <div className="org-logo">
              <img src={nitj} alt="nitj" className="logos-img" />
              <p className="mt-2 fs-5">NITJ</p>
            </div>
            <div className="org-logo">
              <p className="mt-4 fs-3 text-color fw-bold">TechNITiJ 2023</p>
            </div>
          </div>
          <div className="aboutus-logos  d-flex  justify-content-evenly align-items-center">
            <div className="">
              <img src={tta} alt="nitj" className="logos-img" />
              <p className="mt-2 fs-5">TTA</p>
            </div>

            <div className="">
              <img src={iic} alt="iic" className="logos-img" />
              <p className="mt-2 fs-5">IIC</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <a href={rulesandregulation} target="_blank">
            <button className="btn btn-green mx-auto w-125 rounded">
              Rules and Regulations*
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
