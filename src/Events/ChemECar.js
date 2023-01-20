import React from "react";

const Chemical2 = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-5 gap-5 ">
          <div>
            <h1 className="text-center text-3xl font-bold ">CHEM-E-CAR</h1>

            <img />
          </div>

          <div className="px-4">
            <div>
              <h4 className="text-2xl font-semibold ">Event Description</h4>
              <p className="leading-7">
                Chem-e-Car engages college students in designing and
                constructing a car powered by a chemical energy source, that
                will safely run a specific given distance.
              </p>
            </div>
            <h2 className="text-lg font-semibold ">Team Specification:</h2>
            <p className="leading-7">
              <li>
                A team will consist of maximum 3 members. The number can be less
                also
              </li>
            </p>
            <h2 className="text-lg font-semibold">Details:</h2>
            <li className="leading-7">
              This competition consists of construction of a car powered by a
              chemical energy source or reaction.
            </li>
            <li>
              Participants are advised to use their own ideas and materials with
              effective cost.
            </li>
            <li className="leading-7">
              The winner will be chosen according to the distance covered,
              material of construction and cost efficiency etc.
            </li>

            <h2 className="text-lg font-semibold">General Rules</h2>
            <li className="leading-7">
              Any kind of damage done to the arena by the prototype will lead to
              its disqualification.
            </li>
            <li className="leading-7">
              In case of any discrepancies, the decision of the judges will be
              ultimate and no further arguments will be entertained.
            </li>
            <li>
              The organizers reserve the right to change any or all the rules as
              they deem fit. In case a change is made it will be notified to the
              registered team through mail.
            </li>

            <p className="text-lg font-semibold">Cash prizes for winners:</p>
            <li>1st position: INR 5000</li>
            <li>2nd position: INR 3000</li>
            <li>3rd position: INR 2000</li>
            <h2>Workshop will be organized for the same as well.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chemical2;
