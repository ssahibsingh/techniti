import React from "react";

const Prayaas = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-2 gap-5 ">
          <div>
            <h1 className="text-center text-3xl font-bold ">Prayaas</h1>

            <img />
          </div>

          <div className="px-2">
            <div>
              <h4 className="text-center text-color ">Mission:</h4>
              <p className="">
                To educate underprivileged and socially marginalized youth who
                lack access to education, especially those who are the offspring
                of migrant workers. To foster in students a sense of compassion
                and humanity. To inspire them to pursue better careers and end
                the "poor circle" tradition.
              </p>
            </div>
            <div>
              <h4 className="text-center text-color ">Vision:</h4>
              <p className="">
                The guiding principle of PRAYAAS is "AN HOUR A DAY, KEEPS
                ILLITERACY AWAY." Prayaas imagines a community in which no child
                lives in the ignorance of illiteracy. It imagines a nation where
                youngsters are free to dream and no child remains glumly in
                slums. A place where people celebrate their innocence rather
                than including them in collecting trash.
              </p>
            </div>
            <h4 className="text-color text-center">
              Prayaas events for Techniti 2023
            </h4>
            <h4 className="text-color  text-center">Events</h4>
            {/* <h5 className="text-color  ">Dance</h5>
            <p>
              Through song and dance, our little dancers' imaginations are
              piqued while their coordination, listening abilities, and
              musicality are improved.
            </p>
            <ul>
              <li>
                {" "}
                7 to 10 Prayaas students will participate in the aspiring dance.
              </li>
              <li>
                Our bright little stars will perform for 6 to 8 minutes on
                stage, wowing the audience with their incredible dancing
                talents.
              </li>
            </ul> */}
            <h5 className="text-color  ">Games and Fun Events</h5>
            <p>
              Games and Fun events will be organised by PRAYAAS for everyone, to
              participate in these games there will be a participation fee for
              playing a particular game which will be used for welfare of
              PRAYAAS and other amenities of PRAYAAS children.
            </p>
            <a
              href="https://www.nitj.ac.in/prayaas/"
              className=""
              rel="noreferrer"
              target="_blank"
            >
              <button className="btn  d-flex btn-green mx-auto w-125 rounded">
                Visit to Know More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prayaas;
