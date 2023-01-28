import React from "react";
import rccar from "../files/pdf/rccar.pdf";
const RCcars = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-5 gap-5 ">
          <div>
            <h1 className="text-center ">RC CAR Race</h1>

            <img />
          </div>

          <div className="px-2">
            <div>
              <h4 className="text-2xl font-semibold ">Event Description</h4>
              <p className="leading-7">
                RC car event, a fight of machines and a test of endurance,
                persistence and strength of the car. There will be a tough
                struggle between motors embedded in consummately designed body
                and chassis system. The machines will face different types of
                obstacles implanted in an off-road track with the clock moving
                constantly. One clearing all the obstacles in the least amount
                of time will leave with the tag of winner.
              </p>
            </div>
          </div>
          <p className="text-center mt-5">
            For more Information Download the Brouchure!
          </p>
          <div className="d-flex justify-content-center mt-5">
            <a href={rccar} target="_blank">
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

export default RCcars;
