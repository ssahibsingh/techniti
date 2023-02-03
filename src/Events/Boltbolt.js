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
              <h4 className="text-color text-center ">Event Description </h4>
              <p className="leading-7">
                In this teams design and build autonomous/controlled vehicles to
                navigate through challenging tracks filled with obstacles such
                as unstable base, bridges, and more. The goal is to design a
                robocar that can easily overcome these hurdles. The event is
                open to participants from various disciplines as it requires a
                combination of skills such as designing, coding, and core
                technical knowledge. In simpler terms, Bot-bolt is a contest
                where teams make robot cars to race through tough tracks with
                obstacles, and it requires a mix of design, coding and technical
                skills to participate.
              </p>
            </div>

            <h4 className="text-color text-center">Judging Criteria:</h4>
            <p>Event will be divided into Two major rounds: </p>
            <ul>
              <li className="leading-7">
                The first round will be less challenging, with easy obstacles to
                navigate through. The judging for this round will be based
                solely on the design of the robocar and the time it takes for a
                team to complete the track.
              </li>

              <li className="leading-7">
                The second round of the competition will consist of more
                difficult and tricky obstacles. It will be judged based on both
                the time it takes for a team to complete the round and the
                number of attempts they needed to get through all the challenge.
              </li>
            </ul>
            <p>Rulebook will be shared to teams after registrations.</p>
            <h4>Team size :- 1 to 4 (max)</h4>

            <h4 className="text-color text-center">Cash prizes for winners:</h4>
            <li>1st position: INR 7000</li>
            <li>2nd position: INR 5000</li>
            <li>3rd position: INR 3000</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boltbolt;
