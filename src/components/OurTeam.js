import React from "react";
import { teamData } from "../data";
const OurTeam = () => {
  return (
    <>
      <div className="teampage">
        <div className="container">
          <h1 className="text-center text-uppercase fw-bold pb-5">Our Team</h1>
          <div className="row">
            {teamData.map((team) => {
              return (
                <div key={team.key} className="col-md-4 col-sm-6 col-12">
                  <div className="p-2">
                    <div className="teamcard card mb-5 border-0 p-4">
                      <div className="team-image mx-auto bg-trans">
                        <img src={team.img} alt="" className="img-fluid" />
                      </div>
                      <div className="team-content bg-trans">
                        <h3 className="text-center mt-3 bg-trans">
                          {team.name}
                        </h3>
                        <p className="text-center bg-trans">{team.role}</p>
                        <div className="d-flex justify-content-center gap-4">
                          {team.facebook && (
                            <a href={team.facebook}>
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          )}
                          {team.insta && (
                            <a href="https://www.instagram.com/">
                              <i className="fab fa-instagram"></i>
                            </a>
                          )}
                          {team.linkedin && (
                            <a href="https://www.linkedin.com/">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          )}
                        </div>
                      </div>
                      {/* <img
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
                      <p className="fw-bold text-green">
                        Prizes: &#8377; {prize}
                      </p>
                      <div className="d-flex flex-column gap-2">
                        <a href={link}>
                          <button className="btn btn-green mx-2 w-75 rounded">
                            Register Now
                          </button>
                        </a>
                        <Link
                          to={visit}
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                        >
                          <button className="btn btn-grey mx-2 w-75 rounded">
                            Know More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
