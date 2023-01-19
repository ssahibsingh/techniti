import React from "react";

const Chemical1 = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-5 gap-5 ">
          <div>
            <h1 className="text-center text-3xl font-bold ">CHEM-E-DESIGN</h1>

            <img />
          </div>

          <div className="px-4">
            <div>
              <h4 className="text-2xl font-semibold ">Event Description</h4>
              <p className="leading-7">
                The event will be organised in two parts: <br />
                1. Designing the heat exchanger.
                <br /> 2. Presenting the technical details of the design.
                <br />
                Note: Heat exchangers should be designed in such a way that it
                has high efficiency and no leakage.
              </p>
            </div>
            <h2 className="text-lg font-semibold ">Team Specification:</h2>
            <p className="leading-7">
              <li>A team may contain a maximum of 3 members.</li>
              <li className="leading-7">
                A team may consist of members from different colleges too.
              </li>
            </p>
            <h2 className="text-lg font-semibold">Round 1 Details:</h2>
            <li className="leading-7">
              Heat exchanger can be made of any type
            </li>
            <li>
              Prototype of the heat exchanger has to be represented in this
              round
            </li>
            <li className="leading-7">
              Any kind of leakage, efficiency and heat duty of the prototype
              will be examined.
            </li>
            <li>This round will be non – eliminating</li>
            <li className="leading-7">
              The participants have to arrange any material required for the
              designing of the prototype by themselves.
            </li>
            <li className="leading-7">
              Cost of the heat exchanger will be a major factor for the
              evaluation.
            </li>
            <li className="leading-7">
              A detailed presentation regarding each and every detail of the
              heat exchanger such as the type of heat exchanger, the materials
              used , the no. of tubes used and the cost of heat exchanger needs
              to be included.
            </li>
            <h2 className="text-lg font-semibold">Round 2 Details:</h2>
            <li className="leading-7">
              In this round, a power point presentation on heat exchanger has to
              be given.
            </li>
            <li className="leading-7">
              It should contain all the details about material of construction,
              cost and other parameters.
            </li>
            <li>Any one team member will have to give the presentation.</li>
            <li className="leading-7">
              A Q&A round will be there in which questions will be asked to all
              the team members based on the model presented by them.
            </li>
            <p className="text-lg font-semibold">Cash prizes for winners:</p>
            <li>1st position: INR 5000</li>
            <li>2nd position: INR 3000</li>
            <li>3rd position: INR 2000</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chemical1;
