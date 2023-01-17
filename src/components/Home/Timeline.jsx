import React from "react";
import "./Timeline.css";
const Timeline = () => {
  return (
    <>
      <div className="section-timeline">
        <div className="container">
          <div className="text-center bg-inherit">
            <h2 className="fs-1 bg-inherit">Timeline</h2>
            <p className="text-green bg-inherit">How the event will proceed?</p>
          </div>
          <div className="row timeline-content">
            <div className="col-md-6 col-12 bg-inherit">
              <div className="timeline-card ">
                <div className="timeline-card-header">
                <p>Day-1</p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
