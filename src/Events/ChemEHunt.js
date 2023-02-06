import React from "react";

const ChemEHunt = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-2 gap-5 ">
          <div>
            <h1 className="text-center text-uppercase ">Chem-E-Design</h1>
          </div>

          <div className="px-2">
            <div>
              <h3 className="text-color text-center">Event Description</h3>
              <p className="leading-7">
                In Chem-e-hunt, participants will receive chemical questions of
                numerical type and will also be supplied with the map of the
                college marked with numbers, on different buildings,
                corresponding to the answers. Teams should locate the building
                and hunt their next question, each question being complex. The
                team that succeeds in solving most of the questions in shortest
                time will be declared winner
              </p>
            </div>

            <h4 className="text-color text-center mt-4">General Rules</h4>
            <ul>
              <li className="leading-7 text-color">
                The registration cost is INR 100, and the winning team will be
                determined by how well they handle all the difficulties and get
                to the destination.
              </li>
              <li className="leading-7">
                Any type of property damage or improper behaviour will result in
                disqualification.
              </li>
              <li>
                If there are any disagreements, the judges ' verdict will be
                final, and any additional arguments won 't be taken into
                consideration.
              </li>
            </ul>

            <h4 className="text-color text-center">Cash prizes for winners:</h4>
            <li>1st position: INR 1500 (Goodies)</li>
            <li>2nd position: INR 1000 (Goodies)</li>
            <li>3rd position: INR 500 (Goodies)</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChemEHunt;
