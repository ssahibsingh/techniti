import React from "react";

const LumenTrace = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-5 gap-5 ">
          <div>
            <h1 className="text-center text-3xl font-bold ">LumenTrace</h1>

            <img />
          </div>

          <div className="px-4">
            <div>
              <h4 className="text-color text-center">Event Description</h4>
              <p className="leading-7">
                This competition features an arena that consists of a starting
                point where the robots will be provided with different colored
                cube-shaped props. The arena also includes a black-colored line
                that splits into four different colored lines, each leading to a
                designated final point. The goal of the competition is for the
                robots to take the props one by one and navigate the path of the
                corresponding color to the final destination, where the prop is
                to be placed. Once the prop is placed, the robot must return to
                the starting point. Points will be awarded based on the number
                of props placed correctly within a five-minute time frame. This
                competition will test the robots' ability to navigate through a
                specific path and identify the right props.
              </p>
            </div>

            <h2 className="text-color text-center">Judging Criteria:</h2>
            <p>
              This event will consist of a single round in which each team will
              be given three attempts to complete the course with their bot. The
              bots will be judged based on a variety of criteria including
              innovative design, speed and accuracy. In case the bot gets off
              track or deviates from the path, teams will have additional tries
              to get back on track and complete the course.
            </p>

            <h4 className="text-color text-center">Cash prizes for winners:</h4>
            <li>1st position: INR 5000</li>
            <li>2nd position: INR 3500</li>
            <li>3rd position: INR 2000</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LumenTrace;
