import React from "react";

const Robohunt = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-2 gap-5 ">
          <div>
            <h1 className="text-center text-3xl font-bold text-center text-uppercase ">
              robohunt
            </h1>

            <img />
          </div>

          <div className="px-2">
            <div>
              <h4 className="text-center text-color ">Event Description</h4>
              <p className="leading-7">
                Robo Hunt is a competition where teams will write the code of
                controller of small robots, known as bots, that are less than 6
                kg in weight and no larger than 20x20x20 cm in size. The goal of
                the competition is for the teams' bots to successfully navigate
                a path and reach endpoints where balls are placed. The concept
                of the competition closely resembles that of a line-following
                robot.{" "}
                <p className="text-color">Competition type: Round-Robin.</p>
              </p>
            </div>
            <h4 className="text-center text-color ">Team Specification:</h4>
            <p className="leading-7">
              <li>Team Size: 2 members</li>
            </p>
            <h2 className="text-lg font-semibold">Rules and Regulations::</h2>
            <li className="leading-7">Robot must detect the specified line.</li>
            <li>Robot must reach the endpoint.</li>
            <li className="leading-7">
              Teams are not allowed to make any changes to the given code.
            </li>
            <li className="leading-7">Three rounds will be held.</li>
            <li className="leading-7">
              Teams are not allowed to make any changes to their bots once the
              competition has begun.
            </li>
            <li className="leading-7">
              Teams are not allowed to touch their bots once the competition has
              begun except for emergencies.
            </li>
            <li className="leading-7">
              Any unsafe or unethical behavior will lead to disqualification.
            </li>
            <li className="leading-7">The referee's decision is final.</li>
            <li className="leading-7">
              A safety check will be conducted on all bots before the
              competition begins.
            </li>
            <li className="leading-7">
              1Any form of the external remote-control system, including
              wireless communication devices, is prohibited.
            </li>
            <li className="leading-7">
              Teams must adhere to all arena rules and regulations as specified
              by the organizers
            </li>

            <p className=" text-color">Registration Fees: INR 100</p>

            <p className="text-center text-color">Cash prizes for winners:</p>
            <ul>
              <li>1st position: INR 1500</li>
              <li>2nd position: INR 1000</li>
              <li>3rd position: INR 500</li>
            </ul>
            <p className="text-center text-color">Team Coordinators: </p>
            <ul>
              <li>Yash (9870683549)</li>
              <li>Rohit (9877065837)</li>
              <li>Lovish Garg (7696637170)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robohunt;
