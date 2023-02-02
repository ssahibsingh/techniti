import React from "react";

const Microrobowar = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-5 gap-5 ">
          <div>
            <h1 className="text-center text-3xl font-bold uppercase ">
              Microrobowar
            </h1>

            <img />
          </div>

          <div className="px-4">
            <div>
              <h4 className="text-2xl font-semibold ">Event Description</h4>
              <p className="leading-7">
                Micro Robo War is a robot fighting competition where contestant
                teams will compete head-to-head in a 1 vs 1 match. Both teams
                must have built RC or non-RC vehicles (bots) that are less than
                6 kg in weight and no larger than 20x20x20 cm in size. The goal
                of the competition is to gain points by pushing the other team's
                bot into pits or pressing them against weapons in the arena. The
                arena for the competition is 1.5x1.5 meters. Competition type
                Knockout.
              </p>
            </div>
            <h2 className="text-lg font-semibold ">Team Specification:</h2>
            <p className="leading-7">
              <li>Team Size: 2 members</li>
            </p>
            <h2 className="text-lg font-semibold">Rules and Regulations::</h2>
            <li className="leading-7">
              All bots must be less than 6 kg in weight and no larger than
              20x20x20 cm in size.
            </li>
            <li className="leading-7">
              Two bots will be placed in the arena at a time and the bot with
              the lesser points will be knocked out.
            </li>
            <li className="leading-7">
              Any unsafe or unethical behavior will lead to disqualification.
            </li>
            <li className="leading-7">Referee decision is final.</li>
            <li className="leading-7">
              A safety check will be conducted on all bots before the
              competition begins
            </li>
            <li className="leading-7">
              Any form of external remote-control system, including wireless
              communication devices is prohibited.
            </li>
            <li className="leading-7">
              Teams must adhere to all arena rules and regulations as specified
            </li>
            <li className="leading-7">
              A safety check will be conducted on all bots before the
              competition begins.
            </li>
            <li className="leading-7">
              Any form of the external remote-control system, including wireless
              communication devices, is prohibited.
            </li>
            <li className="leading-7">
              Teams must adhere to all arena rules and regulations as specified
              by the organizers
            </li>

            <p className="text-lg font-semibold">Registration Fees: INR 200</p>

            <p className="text-lg font-semibold mt-10">
              Cash prizes for winners:
            </p>
            <li>1st position: INR 3500</li>
            <li>2nd position: INR 2500</li>
            <li>3rd position: INR 2000</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Microrobowar;
