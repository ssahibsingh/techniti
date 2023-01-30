import React from "react";
import "./Timeline.css";
const Timeline = () => {
  let data = [
    {
      day: 1,
      date:"25 Feb",
      events: ["Opening Ceremony", "Hackathon", "RC Racing", "DJ Night"],
    },
    {
      day: 2,
      date:"26 Feb",
      events: [
        "Hackathon",
        "Startup Mela",
        "Investment Meet",
        "ROBO War",
        "EDM",
        "Fashion Show",
      ],
    },
    {
      day: 3,
      date:"27 Feb",
      events: ["PAN India Symbiosis", "NEP", "Drone Show", "Star Night"],
    },
    {
      day: 4,
      date:"28 Feb",
      events: ["Science Day", "Closing Ceremony", "Comedy Show"],
    },
  ];
  return (
    <>
      <div className="section-timeline">
        <div className="container">
          <div className="text-center bg-inherit">
            <h2 className="fs-2 bg-inherit">Timeline</h2>
            <p className="text-green bg-inherit fs-5">How the event will proceed?</p>
          </div>
          <div className="timeline my-5">
            {data.map((item) => {
              return (
                <div
                  className={`box ${item.day % 2 === 0 ? "right" : "left"}`}
                  key={item.day}
                >
                  <div className="content text-center">
                    <h2 className="bg-trans">Day {item.day}: {item.date} </h2>
                    <div className="bg-trans my-3">
                      <ul className="bg-trans timeline-day-list">
                        {item.events.map((event, index) => {
                          return (
                            <li key={index} className="bg-trans">
                              {event}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
