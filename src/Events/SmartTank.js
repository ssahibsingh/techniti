import React from "react";

const SmartTank = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-5 gap-5 ">
          <div>
            <h1 className="text-center text-3xl font-bold ">Smart Tank</h1>

            <img />
          </div>

          <div className="px-4">
            <div>
              <h4 className="text-color ">Event Description</h4>
              <p className="leading-7">
                It is a ideation competition in which participants have to pitch
                their unique ideas or projects in the field of iot or robotics.
              </p>
            </div>

            <h2 className="text-color">Details:</h2>
            <ul>
              <li className="leading-7">
                We will invite 3 judges who are into iot and robotics.
              </li>

              <li className="leading-7">
                The participants will pitch there unique ideas and projects in
                the field of iot or robotics and it will be judged on the basis
                of innovation, feasibility, time, uniqueness,etc
              </li>
            </ul>

            <h4 className="text-color">Cash prizes for winners:</h4>
            <li>1st position: INR 2000</li>
            <li>2nd position: INR 1500</li>
            <li>3rd position: INR 1000</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartTank;
