import React from "react";
import EventsCard from "./EventsCard";

import { data } from "../data";

const Events = ({ count }) => {
  return (
    <div className="eventspage">
      <div className="container">
        <h1 className="text-center text-uppercase fw-bold pt-4 pb-5">Events</h1>
        <div className="row">
          {data.map((item, index) => {
            if (count === undefined) {
              return (
                <EventsCard
                  key={item.key}
                  Imgsrc={item.Imgsrc}
                  EventName={item.name}
                  link={item.link}
                  prize={item.prize}
                  visit={item.visit}
                  desc={item.desc}
                />
              )
            }
            else if (count && index < count) {
              return (
                <EventsCard
                  key={item.key}
                  Imgsrc={item.Imgsrc}
                  EventName={item.name}
                  link={item.link}
                  prize={item.prize}
                  visit={item.visit}
                  desc={item.desc}
                />
              )
            }
          }
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
