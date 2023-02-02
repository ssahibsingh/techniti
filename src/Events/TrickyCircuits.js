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
            <h4 className="text-2xl font-semibold ">Event Description</h4>
            <p className="leading-7">
              Tricky Circuits is a competition where participants will be given
              circuits consisting of resistors, gates, and other electronic
              devices, and they must determine the output. The competition will
              have semi-finals and finals rounds, with the difficulty of the
              circuits increasing as the event progresses.
            </p>
          </div>
          <h2 className="text-lg font-semibold ">Rounds:</h2>
          <p className="leading-7">
            Both rounds will be circuit-solving rounds. Circuit components will
            be given to the participants, and the circuit will be constructed on
            the spot with the help of the circuit diagrams provided. The time
            for construction and solving the circuit will be provided on spot. 
          </p>
          <h2 className="text-lg font-semibold">Rules and Regulations::</h2>
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
          <p className="text-lg font-semibold">Registration Fees: INR 100</p>

          <p className="text-lg font-semibold mt-10">
            Cash prizes for winners:
          </p>
          <li>1st position: INR 2500</li>
          <li>2nd position: INR 1500</li>
          <li>3rd position: INR 1000</li>
        </div>
      </div>
    </div>
  );
};

export default TrickyCircuits;
