import React from "react";
// import img from "../files/img1.gif";
import { Link } from "react-router-dom";

const EventsCard = ({ Imgsrc, EventName, prize, link, desc, visit }) => {
  return (
    <>

      <div className="row">
        <div
          className="eventcard card shadow  p-2 mb-5 bg-body rounded border-0 "
          style={{ width: "21rem" }}
        >
          <h5 className="card-title text-uppercase  fw-bold fs-4 text-center">
            {EventName}
          </h5>
          <img src={Imgsrc} className="card-img-top" alt={EventName} />
          <div className="card-body ">
            <p class="card-text text-gray-200">{desc}</p>
            <div className="flex gap-2 justify-content-evenly mt-2">
              <p
                className="btn  text-dark fw-bold w-100  border-0 
events-button"
              >
                Prizes: &#8377; {prize}
              </p>
              <p>
                <Link
                  to={`/${link}`}
                  className="btn  w-100 text-dark fw-bold  border-0  events-button"
                >
                  Know More
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsCard;
