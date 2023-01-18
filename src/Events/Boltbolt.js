import React from "react";

const Boltbolt = () => {
  return (
    <div className="para-text flex justify-evenly p-5 gap-5 ">
      <div>
        <h1 className="text-center text-3xl font-bold uppercase ">
          Exhibition by Team Avishkar
        </h1>

        <img />
      </div>

      <div className="px-4">
        <div>
          <h4 className="text-2xl font-semibold ">Event Description</h4>
          <p className="leading-7">
            Our self-manufactured ATV is exhibited in fully running condition
            and workshop would be commanded by various departments with their
            specific information commanded as below:
          </p>
        </div>
        <h2 className="text-lg font-semibold">Features: </h2>
        <li className="leading-7">
          Design – Catia design , Roll cage, Links, etc.
        </li>
        <li className="leading-7">
          Transmission – Gear Design, CVT, Gearbox, joints.
        </li>
        <li className="leading-7">Suspension – Shockers, arms & links</li>
        <li className="leading-7">
          Analysis – Roll cage analysis, components analysis
        </li>
      </div>
    </div>
  );
};

export default Boltbolt;
