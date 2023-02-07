import React from "react";
import notebook from "../files/notebook.jpg";

const TreasureHunt = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mx-auto">
      <div className="col-md-4 col-sm-6 col-12">
        <div className="p-4">
          <div className="eventcard card mb-5 border-0 p-4">
            <img
              src={notebook}
              className="card-img-top rounded"
              alt={TreasureHunt}
            />
            <h5 className="card-title text-uppercase fw-bold fs-4 text-center mt-4 bg-trans">
              TreasureHunt Notebooks
            </h5>
            <div className="card-body bg-trans">
              <p className="card-text bg-trans">
                Hola everyone ! All set for Techniti? With fest round the corner
                Zeal society brings you Techniti special registers . Get yours
                before they run out of stock.
              </p>
              <div className="text-center">
                <p className="fw-bold text-green">Price: INR 65</p>
                <div className="d-flex flex-column gap-2">
                  <a
                    href="tel:+91 70600 60523"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-green mx-2 w-75 rounded">
                      Buy Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasureHunt;
