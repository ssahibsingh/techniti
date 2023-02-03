import React from "react";

const SmartTank = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-2 gap-5 ">
          <div>
            <h1 className="text-center text-3xl font-bold ">Smart Tank</h1>

            <img />
          </div>

          <div className="px-2">
            <div>
              <h4 className="text-color text-center">Event Description</h4>
              <p className="leading-7">
                It is an ideation competition event where participants present
                and pitch their unique ideas. The ideas are usually presented
                through a PowerPoint presentation and the participants are
                expected to explain their method of formation and industrial use
                of the idea. The goal of the competition is to identify and
                promote innovative ideas that have the potential for practical
                application in industry.
              </p>
            </div>

            <h2 className="text-color text-center">Details:</h2>
            <p>There will be two round in Smart tank -</p>
            <h4 className="text-color">Round 1: Screening Round</h4>
            <p>
              Participants will submit their ideas in document format, such as
              Microsoft Word or PowerPoint. Our team will then review the
              submissions and select a number of ideas for the second round
              based on factors such as uniqueness, potential industrial use, and
              the team's understanding of the idea. The selected teams will then
              come to the college on the final day for the second round of the
              competition.
            </p>
            <h4 className="text-color">Round 2: Presentation Round</h4>
            <p>
              We will bring in three judges who are experts in the field of IoT
              and robotics to evaluate all of the ideas. They will review the
              presentations and assign scores based on factors such as the
              uniqueness of the idea, the team's coordination and presentation
              skills, the potential industrial use, and the results of an
              audience poll.
            </p>
            <h4 className="text-color text-center">Venue:</h4>
            <p>
              The competition will be held indoors so LT-402 can be used and
              each participant will take 5 - 10 mins to pitch its idea and we
              expect more than 10 teams so the competition can take 1.5 hours to
              complete.
            </p>

            <h4 className="text-color text-center">Cash prizes for winners:</h4>
            <li>1st position: INR 3000</li>
            <li>2nd position: INR 2000</li>
            <li>3rd position: INR 1000</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartTank;
