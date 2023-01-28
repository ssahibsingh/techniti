import React from "react";

const Boltbolt = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-5 gap-5 ">
          <div>
            <h1 className="text-center text-3xl font-bold ">Bolt-Bolt</h1>

            <img />
          </div>

          <div className="px-4">
            <div>
              <h4 className="text-color ">Event Description</h4>
              <p className="leading-7">
                It is a competition in which a team of 4 has to make a remote
                controlled robot car which has to race with other robots
                crossing obstacles and checkpoints . Every bot has to follow the
                track and points will be awarded according to speed , design
                ,time and racing behavior.
              </p>
            </div>

            <h2 className="text-color">Details:</h2>
            <ul>
              <li className="leading-7">
                There will be 2 rounds of the competition.
              </li>

              <li className="leading-7">
                The first round’s track will be a bit easy and the second track
                will be a little difficult .
              </li>
              <li className="leading-7">
                The top 5 performers of round 1 will be participating in the
                second round.
              </li>
              <li className="leading-7">
                We have to create 2 tracks in front of LT which will include
                obstacles , walls , poles , ground and bridges.
              </li>
              <li className="leading-7">
                We are expecting at least 10 teams to participate in this racing
                event.
              </li>
              <li className="text-color">
                We will create some teasers for the fun and interesting race.
              </li>
            </ul>

            <h4 className="text-color">Cash prizes for winners:</h4>
            <li>1st position: INR 2000</li>
            <li>2nd position: INR 1500</li>
            <li>3rd position: INR 1000</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boltbolt;
