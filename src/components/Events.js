import React from "react";
import EventsCard from "./EventsCard";

import { data } from "../data";

const Events = () => {
  return (
    <div className="eventspage">
      <div className=" d-flex p-2 justify-content-evenly container align-items-center flex-wrap gap-3 mx-auto">
        {data.map((item) => (
          <EventsCard
            key={item.key}
            Imgsrc={item.Imgsrc}
            EventName={item.name}
            link={item.link}
            prize={item.prize}
            visit={item.visit}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
