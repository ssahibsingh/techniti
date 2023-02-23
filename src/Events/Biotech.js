import React from "react";

const Biotech = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-2 gap-5 ">
          <div>
            <h1 className="text-center text-3xl font-bold ">BioMod</h1>
          </div>

          <div className="px-2">
            <div>
              <h4 className="text-color text-center">Event Description</h4>
              <p className="leading-7">
                BioMod is the event that bridges Biology and technology with modeling. The model should be based of Bioremediation. Bioremediation is the process of using microorganisms to clean up environmental pollutants. The students can demonstrate the process of bioremediation using a small-scale model and show how it can be used to clean up pollutants such as oil spills.
              </p>
            </div>

            <h4 className="text-color text-center">Details:</h4>
            <ul>
              <li className="leading-7">
                Functionality: How well the model demonstrates bioremediation and its effectiveness in cleaning up environmental pollution.
              </li>
              <li>
                Innovation: How creative and unique the model is in addressing environmental pollution.
              </li>
              <li className="leading-7">
                The winner will be chosen according to the distance covered,
                material of construction and cost efficiency etc.
              </li>
              <li className="leading-7">
                Sustainability: How well the model can be applied in real-life scenarios and its overall environmental impact.
              </li>
              <li className="leading-7">
                Future Prospects:How much the model can be improvised to use in real life.
              </li>
            </ul>

            <h4 className="text-color text-center mt-4">General Rules</h4>
            <ul>

              <li className="leading-7">
                The participants need to make a model for Bio-Remediation.
              </li>
              <li>
                The materials to be used for building the model should environmental friendly.
              </li>
              <li>
                The participants need to prepare a presentation to present their model to the judges.
              </li>
              <li>
                The maximum team size for the event is 5 participants.
              </li>
              <li>
                The participants also need to bring their models to the venue and show the workflow to the judges.
              </li>
            </ul>

            <h4 className="text-color text-center">Cash prizes for winners:</h4>
            <li>1st position: INR 1500</li>
            <li>2nd position: INR 1000</li>
            <li>3rd position: INR 500</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biotech;
