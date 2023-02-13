import React from "react";
import greentecton from "../files/pdf/greentecton.pdf";

const GreenTecton = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-2 gap-5 ">
          <div>
            <h3 className="text-center text-3xl font-bold text-uppercase text-color">
              Green Tecton
            </h3>

            <img />
          </div>

          <div className="px-2">
            <div>
              <h5 className="text-center">
                " Be part of the solution, not part of the pollution."
              </h5>
              <ul>
                <li>A digital model of a sustainable building.</li>
              </ul>
            </div>
            <h4 className="text-lg font-semibold text-color">
              Team Specification:
            </h4>
            <p className="leading-7">A team will consist of 4 members.</p>

            <h4 className="text-lg text-color text-center ">
              Registration Fees: INR 100
            </h4>

            <div>
              <h3>Rules:</h3>
              <ul>
                <li>Maximum 4 members in a team.</li>
                <li>
                  The model making will be done by the participants at their own
                  premises.
                </li>
                <li>
                  Software allowed are Auto Cad, Revit, Google SketchUp etc.
                </li>
                <li>
                  No plagiarism should be there, otherwise that team will be
                  directly eliminated.
                </li>
              </ul>

              <h3>Round: 1</h3>
              <p>
                Submission of ppt including 3D model and description about the
                model.
              </p>
              <h3>Round: 2</h3>
              <p>Presentation of best teams will be taken.</p>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <a href={greentecton} target="_blank">
                <button className="btn btn-green mx-auto w-125 rounded">
                  Download Brochure
                </button>
              </a>
            </div>

            <p className="text-lg font-semibold mt-10 text-color">
              Cash prizes for winners:
            </p>
            <li>1st position: INR 5000</li>
            <li>2nd position: INR 2500</li>
            <li>3rd position: INR 1100</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenTecton;
