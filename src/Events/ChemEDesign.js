import React from "react";

const ChemEDesign = () => {
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
                The event will be organised in two parts:
              </p>
              <ol>
                <li>Designing the heat exchanger.</li>
                <li>Presenting the technical details of the design.</li>
              </ol>
              <p>
                Heat exchangers should be designed in such a way that it has
                high efficiency and no leakage.
              </p>
            </div>

            <h4 className="text-color text-center">Team specification:</h4>
            <ul>
              <li className="leading-7">
                A team may contain a maximum of 3 members.
              </li>
              <li>
                A team may consist of members from different colleges too.
              </li>
            </ul>

            <h4 className="text-color text-center mt-4">General Rules</h4>
            <ul>
              <li className="leading-7 text-color">
                Registration fees are INR 150
              </li>
              <li className="leading-7">
                Any kind of damage done to the arena by the prototype will lead
                to its disqualification.
              </li>
              <li>
                In case of any discrepancies, the decision of the judges will be
                ultimate and no further arguments will be entertained.
              </li>
              <li>
                The organizers reserve the right to change any or all the rules
                as they deem fit. In case a change is made it will be notified
                to the registered team through mail
              </li>
            </ul>

            <h4 className="text-color text-center">Cash prizes for winners:</h4>
            <li>1st position: INR 5000</li>
            <li>2nd position: INR 3000</li>
            <li>3rd position: INR 2000</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChemEDesign;
