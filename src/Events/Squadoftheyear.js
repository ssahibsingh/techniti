import React from "react";
import squadoftheyear from "../files/pdf/squadoftheyear.pdf";

const Squadoftheyear = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-2 gap-5 ">
          <div>
            <h3 className="text-center text-3xl font-bold text-uppercase text-color">
              Squad of the year
            </h3>

            <img />
          </div>

          <div className="px-2">
            <h4 className="text-uppercase text-center font-bold text-color">
              Event A: Bridge-it
            </h4>

            <div>
              <h4 className="text-2xl font-semibold text-color">
                Event Description
              </h4>
              <ul>
                <li>Construction of bridge structure.</li>
                <li>
                  Material (sticks, glue, etc.)will be provided on 24 feb 2023.
                </li>
                <li>Evaluation will be on 25th feb at tennis court.</li>
                <li>
                  Each model will undergo a certain load and the models showing
                  minimum deflection will be eligible for next round.
                </li>
              </ul>
            </div>
            <h4 className="text-lg font-semibold text-color">
              Team Specification:
            </h4>
            <p className="leading-7">A team will consist of 5 members.</p>

            {/* scuffle */}
            <h4 className="text-uppercase text-center font-bold text-color">
              Event B: Scuffle
            </h4>

            <div>
              <h4 className="text-2xl font-semibold text-color">
                Event Description
              </h4>
              <ul>
                <li>
                  Run consisting certain hurdles depicting your overall
                  personality, thinking, mental ability and approach towards the
                  task.
                </li>
                <li>Evaluation will be on time criteria.</li>
              </ul>
            </div>
            <h4 className="text-lg font-semibold text-color">
              Team Specification:
            </h4>
            <p className="leading-7">A team will consist of 5 members.</p>

            <h4 className="text-lg text-color text-center ">
              Registration Fees: INR 100
            </h4>
            <div className="d-flex justify-content-center mt-5">
              <a href={squadoftheyear} target="_blank">
                <button className="btn btn-green mx-auto w-125 rounded">
                  Download Brochure
                </button>
              </a>
            </div>

            <p className="text-lg font-semibold mt-10 text-color">
              Cash prizes for winners:
            </p>
            <li>1st position: INR 5000</li>
            <li>2nd position: INR 2000</li>
            <li>3rd position: INR 1000</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Squadoftheyear;
