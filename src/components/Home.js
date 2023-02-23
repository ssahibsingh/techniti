import React from "react";
import { Link } from "react-router-dom";
import TreasureHunt from "../Events/TreasureHunt";
import Events from "./Events";
import About from "./Home/About";
import EventSchedule from "./EventSchedule";
import Header from "./Home/Header";
import RegisterforStar from "./Home/RegisterforStar";
import Sponsor from "./Home/Sponsor";
import Timeline from "./Home/Timeline";

const Home = () => {
  return (
    <>
      <Header />
      <EventSchedule/>
      <RegisterforStar />
      <About />

      <Events count={3} />
      <div className="mb-5 text-center">
        <Link
          to={"/event"}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <button className="btn btn-grey px-4 py-3">Load More</button>
        </Link>
      </div>
      <Timeline />
      <Sponsor />
    </>
  );
};

export default Home;
