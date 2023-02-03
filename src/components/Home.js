import React from "react";
import { Link } from "react-router-dom";
import Events from "./Events";
import About from "./Home/About";
import Header from "./Home/Header";
import Sponsor from "./Home/Sponsor";
import Timeline from "./Home/Timeline";
import ParticleBackground from "./ParticleBackground";

const Home = () => {
  return (
    <>
      {/* <ParticleBackground /> */}
      <Header />
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
