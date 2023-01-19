import React from "react";

const Prayaas = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-5 gap-5 ">
          <div>
            <h1 className="text-center text-3xl font-bold ">Prayaas</h1>

            <img />
          </div>

          <div className="px-4">
            <div>
              <h4 className="text-2xl font-semibold ">Mission</h4>
              <p className="leading-7">
                To educate underprivileged and socially marginalized youth who
                lack access to education, especially those who are the offspring
                of migrant workers. To foster in students a sense of compassion
                and humanity. To inspire them to pursue better careers and end
                the "poor circle" tradition.
              </p>
            </div>
            <h2 className="text-2xl font-semibold ">
              Prayaas events for Techniti 2023
            </h2>

            <h2 className="text-lg font-semibold">Game 1: Over the wire</h2>
            <p className="leading-7">
              Playing the game of "wire loops" entails moving a metal loop (a
              "probe") around a serpentine length of wire without touching it.
              [1] When the loop and wire touch, they create a closed electric
              circuit since they are connected to a power source in this
              fashion. The circuit is attached to some form of light- or
              sound-emitting device, so that when the wire and loop come into
              contact, the sound-emitting device will produce a sound that is
              typically a buzzing noise.
            </p>
            <p>Requirements</p>
            <li>
              Copper wires, Battery, Buzzer, Led lights, Switch, Wooden blocks,
              Adhesives, Table
            </li>

            <h2 className="text-lg font-semibold">Rules</h2>
            <li className="leading-7">
              The player must carefully pass the probe over the wire.
            </li>
            <li className="leading-7">
              The probe must not come in contact with the wire loop.
            </li>
            <li>The player gets eliminated if probe touches the loop.</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prayaas;
