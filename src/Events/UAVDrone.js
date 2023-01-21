import React from "react";
import uavdrone from "../files/pdf/uavdrone.pdf";
const UAVDrone = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text   ">
          <div>
            <h1 className="text-center text-3xl font-bold uppercase ">
              UAV-Drone
            </h1>

            <img />
          </div>

          <div className="px-2">
            <div>
              <h4 className="text-2xl font-semibold ">Event Description</h4>
              <p className="leading-7">
                Drones are objects that the world is looking up to. TechNITi'23
                presents the UAV Drone challange, A multi-level competition that
                involves various challenges and obstacles in increasing order of
                difficulty which would screen out the most agile drone. The
                challenge has been designed to build drones and encourage
                participants for creativity, teamwork, critical thinking, and
                enjoyment.
              </p>
            </div>
          </div>
          <p className="text-center mt-5">
            For more Information Download the Brouchure!
          </p>
          <div className="d-flex justify-content-center mt-5">
            <a href={uavdrone} target="_blank">
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

export default UAVDrone;
