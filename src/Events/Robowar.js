import React from "react";

import robowar from "../files/pdf/robowar.pdf";
const Robowar = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text   ">
          <div>
            <h1 className="text-center text-uppercase ">robowar</h1>

            <img />
          </div>

          <div className="px-2">
            <div>
              <h4 className="text-2xl font-semibold ">Event Description</h4>
              <p className="leading-7">
                It will be a savage, Clash of Metals with the alloys grinding
                red hot. It is a game of style, control, damage and aggression
                with the robot pits against each other in a deadly combat. It is
                time to concentrate on the slashing of the bots. Get ready to
                feel the chills and shivers down your spine and become a part of
                Rob wars. So Design and Construct a remote controlled bot with
                adequate weapon systems capable of fighting a one on one
                tournament.
              </p>
            </div>
          </div>
          <p className="text-center mt-5">
            For more Information Download the Brouchure!
          </p>
          <div className="d-flex justify-content-center mt-5">
            <a href={robowar} target="_blank">
              <button className="btn btn-green mx-auto w-125 rounded">
                Download Brochure
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robowar;
