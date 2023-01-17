import React, { useEffect } from "react";
import EventsCard from "./EventsCard";
import prayaas from "../files/prayaas.png";
import robohunt from "../files/robohunt.jpg";
import microrobowar from "../files/microrobowar.jpg";
import LumentRace from "../files/lumenTrace.jpg";
import hackathon from "../files/hackathon.jpg";
import boltbolt from "../files/boltbolt.jfif";
import robowars from "../files/robowars.jpg";
import smarttank from "../files/smartank.jpg";
import trickycircuits from "../files/trickycircuits.jpg";
import gaNIT from "../files/gaNIT.jfif";
import Chassisside from "../files/Chassisside.webp";
import UAVdrone from "../files/UAVdrone.jpg";
import RCcars from "../files/RCcars.jpg";
import atv from "../files/atv.jpg";
import heatexchanger from "../files/heatexchanger.jpg";
import tBHK from "../files/3bhk.jfif";
import { Link } from "react-router-dom";

import bgimg from "../files/webbg.jpg";

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
      {/* <a
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        href="https://hackmol.tech/"
        target="_blank"
      >
        <EventsCard
          Imgsrc={hackathon}
          EventName="HackMOL 4.0"
          link={registerLinks[0].hackathon}
          prize="60000"
        />
      </a>

      <Link
        to="/chemecar"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <EventsCard
          Imgsrc={Chassisside}
          EventName="Chem-E-Car"
          prize="10000"
          link={registerLinks[1].chemecar}
        />
      </Link>
      <Link
        to="/chemedesign"
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <EventsCard
          Imgsrc={heatexchanger}
          EventName="CHEM-E-DESIGN"
          prize="10000"
        />
      </Link>
      <Link
        to="/prayaas"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <EventsCard Imgsrc={prayaas} EventName="Prayass" prize="3000" />
      </Link>
      <Link
        to="/maths"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <EventsCard Imgsrc={gaNIT} EventName="Integration Bee" prize="5500" />
      </Link>
      <Link
        to="/robohunt"
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <EventsCard Imgsrc={robohunt} EventName="RoboHunt" prize="3000" />
      </Link>
      <Link
        to="/microrobowar"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <EventsCard
          Imgsrc={microrobowar}
          EventName="MicroRoboWar"
          prize="8000"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        />
      </Link>

      <Link
        to="/trickycircuits"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <EventsCard
          Imgsrc={trickycircuits}
          EventName="TrickyCircuits"
          prize="5000"
        />
      </Link>
      <Link
        to="/threebhk"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <EventsCard Imgsrc={tBHK} EventName="3BHK" prize="Momentos & Goodies" />
      </Link>
      <Link
        to="/uavdrone"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <EventsCard Imgsrc={UAVdrone} EventName="UAV Drone" prize="" />
      </Link>
      <Link to="/robowar">
        <EventsCard Imgsrc={robowars} EventName="Robo Wars" prize="" />
      </Link>
      <Link to="/rccars">
        <EventsCard Imgsrc={RCcars} EventName="RC Cars" prize="" />
      </Link>
      <Link
        to="/avishkar"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <EventsCard
          Imgsrc={atv}
          EventName="Exhibition by Team Avishkar"
          prize="None"
        />
      </Link>

      <EventsCard Imgsrc={LumentRace} EventName="LumentRace" prize="10500" />
      <EventsCard
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        Imgsrc={smarttank}
        EventName="SmartTank"
        prize="4500"
      />
      <EventsCard Imgsrc={boltbolt} EventName="Bolt-Bolt" prize="10500" /> */}
    </div>
  );
};

export default Events;
