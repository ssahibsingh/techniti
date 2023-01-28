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
              <h4 className="text-color ">Event Description</h4>
              <p className="leading-7">
                In this competition a team of 4 has to create a color sensing
                robot which will be placed on an arena with different colored
                Tracks , the bot will be provided with a colored prop and the
                task is to follow that coloured line and place the prop at its
                final location.
              </p>
            </div>

            <h2 className="text-color">Details:</h2>
            <p>
              The arena consists of a starting point where different colored
              cube shaped props will be provided to bot and there is a black
              colored line which splits into 4 different colored lines and reach
              their respective final points. So there are many different props
              available to bot which the bot will take one by one and follow the
              respected color line and drop the prop at its final destination
              and come back to initial point . Points will be awarded according
              to no. of props placed correctly in 5 minutes.
            </p>

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

export default LumenTrace;
