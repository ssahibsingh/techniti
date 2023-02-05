import React from "react";

const BeInquisitive = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-2 gap-5 ">
          <div>
            <h1 className="text-center text-3xl font-bold text-uppercase ">
              Be Inquisitive
            </h1>
          </div>

          <div className="px-2">
            <div>
              <h4 className="text-color text-center">Event Description</h4>
              <p className="leading-7">
                The objective behind this competition is to evaluate the
                knowledge of the participants within academics as well as beyond
                academics and to make them familiar with the prospects of
                quizzes and the objectivity of the questions. The main aim of
                the competition is to develop interest in subject areas of
                Business and Economic affairs.
              </p>
            </div>

            <h4 className="text-color text-center">Details:</h4>
            <p>
              It is organised by the students of NIT Jalandhar as a part of
              TechNITi 2023 Fest. The quiz consists of 3 rounds and the
              respective rounds are as follows:
            </p>
            <ul>
              <li className="leading-7">
                <span className="text-color">Round 1:</span> This round will be
                based on the business related abbreviations in which 20
                questions will be asked. The duration of this round will be 15
                minutes.
              </li>
              <li className="leading-7">
                <span className="text-color">Round 2:</span> Round 2 will be
                based upon the slogans, brand names, logo and taglines of
                companies consisting of 20 questions. Duration of this round
                will be same as previous round.
              </li>
              <li className="leading-7">
                <span className="text-color">Round 3:</span> This round will be
                based upon the economics affairs of the country and 20 questions
                will be asked. The duration is 15 minutes.
              </li>
            </ul>

            <h4 className="text-color text-center mt-4">
              Rules for Quiz Competition:
            </h4>
            <ol>
              <li className="">There has to be 3 participants in each team.</li>
              <li className="leading-7">Right answer will fetch 10 marks.</li>

              <li className="leading-7">
                The medium of the questions will be English.
              </li>
              <li className="leading-7">
                If there is any tie-up among the participants about average
                score, it will be solved by taking another round or set of
                rounds.
              </li>
              <li className="leading-7">
                Final decision will be taken by judges
              </li>
            </ol>

            <h4 className="text-color text-center">Cash prizes for winners:</h4>
            <li>1st position: To Be Decided</li>
            <li>2nd position: To Be Decided </li>
            <li>3rd position: To Be Decided </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeInquisitive;
