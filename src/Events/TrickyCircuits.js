import React from "react";

const TrickyCircuits = () => {
  return (
    <div className="container para-text flex justify-evenly p-2 gap-5 ">
      <div className="singleevents">
        <div>
          <h1 className="text-center text-3xl font-bold uppercase ">
            TrickyCircuits
          </h1>

          <img />
        </div>

        <div className="px-2">
          <div>
            <h4 className="text-center text-color ">Event Description</h4>
            <p className="leading-7">
              Tricky Circuits is a competition where participants will be given
              circuits consisting of resistors, gates, and other electronic
              devices, and they must determine the output. The competition will
              have semi-finals and finals rounds, with the difficulty of the
              circuits increasing as the event progresses.
            </p>
          </div>
          <h4 className="text-center text-color ">Rounds:</h4>
          <p className="leading-7">
            Both rounds will be circuit-solving rounds. Circuit components will
            be given to the participants, and the circuit will be constructed on
            the spot with the help of the circuit diagrams provided. The time
            for construction and solving the circuit will be provided on spot. 
          </p>
          <h4 className="text-center text-color">Rules and Regulations::</h4>
          <ul>
            <li className="leading-7">
              All participants must be present on time for the event
            </li>
            <li>
              Participants are only allowed to use the components provided to
              them during the event.
            </li>
            <li className="leading-7">
              Participants are not allowed to bring in any external materials or
              devices.
            </li>
            <li className="leading-7">
              Participants must abide by the safety rules and guidelines
              provided by the organizers.
            </li>
            <li className="leading-7">
              Participants should be familiar with the circuit components and
              basic circuit construction before the event.
            </li>

            <li className="leading-7">
              Any unsafe or unethical behavior will lead to disqualification.
            </li>
            <li className="leading-7">The referee's decision is final.</li>

            <li className="leading-7">
              Teams must adhere to all arena rules and regulations as specified
              by the organizers.
            </li>
          </ul>
          <p className="text-lg font-semibold  text-color">
            Registration Fees: INR 100
          </p>

          <h4 className="text-color text-center">Cash prizes for winners:</h4>
          <ul>
            <li>1st position: INR 2500</li>
            <li>2nd position: INR 1500</li>
            <li>3rd position: INR 1000</li>
          </ul>

          <h4 className="text-color text-center ">Team Coordinators</h4>
          <ul>
            <li>Manish (9532861722)</li>
            <li>Gargee (6371785357)</li>
            <li>Divanshi (9463636056) </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrickyCircuits;
