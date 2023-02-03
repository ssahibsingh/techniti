import React from "react";

const Chemical2 = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-2 gap-5 ">
          <div>
            <h1 className="text-center text-3xl font-bold ">CHEM-E-CAR</h1>
          </div>

          <div className="px-2">
            <div>
              <h4 className="text-color text-center">Event Description</h4>
              <p className="leading-7">
                This competition consists of construction of a car powered by a
                chemical energy source or reaction. Participants are advised to
                use their own ideas and materials with effective cost. The
                winner will be chosen according to the distance covered,
                material of construction and cost efficiency etc.
              </p>
            </div>

            <h4 className="text-color text-center">Details:</h4>
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

            <h4 className="text-color text-center mt-4">General Rules</h4>
            <ul>
              <li className="leading-7 text-color">
                Registration fees are INR 150
              </li>
              <li className="leading-7">
                Prototypes that cause any kind of harm to the arena will be
                disqualified.
              </li>
              <li>
                In the event of a disagreement, the judges' decision will be
                final, and no further arguments will be considered.
              </li>
              <li>
                The event's planners maintain the right to modify any or all of
                the rules as they see fit. If a modification is made, the
                registered team will be notified by mail.
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

export default Chemical2;
