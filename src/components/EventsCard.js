import React from "react";
// import img from "../files/img1.gif";
import { Link } from "react-router-dom";

const EventsCard = ({ Imgsrc, EventName, prize, link, desc, visit }) => {
  return (
    <>
      <div className="col-md-4 col-sm-6 col-12">
        <div className="p-3">
          <div className="eventcard card mb-5 border-0 p-4">
            <img
              src={Imgsrc}
              className="card-img-top rounded"
              alt={EventName}
            />
            <h5 className="card-title text-uppercase fw-bold fs-4 text-center mt-4 bg-inherit">
              {EventName}
            </h5>
            <div className="card-body bg-trans">
              <p className="card-text bg-trans">{desc}</p>
              <div className="text-center">
                <p className="fw-bold text-green">Prizes: &#8377; {prize}</p>
                <div>
                  <Link to={`/${link}`}>
                    <button className="btn btn-green mx-2">Register Now</button>
                  </Link>
                  <Link to={`/${link}`}>
                    <button className="btn btn-grey mx-2">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsCard;
