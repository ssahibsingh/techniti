import React from "react";
import { fashionShowdata } from "../data";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
const FashionShow = () => {
  return (
    <>
      <div className="container">
        <div className="singleevents">
          <div className="para-text flex justify-evenly px-5 gap-5 ">
            <div>
              <h1 className="text-center text-3xl font-bold uppercase ">
                Fashion Show
              </h1>
              <Carousel
                infiniteLoop={true}
                autoPlay={true}
                showArrows={true}
                interval="2000"
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                stopOnHover={true}
                swipeable={true}
                className="fashion-carousel"
              >
                {fashionShowdata.map((item) => {
                  return (
                    <div key={item.image}>
                      <img src={item.image} alt="" />
                      {/* <p className="legend">Legend 1</p> */}
                    </div>
                  );
                })}
              </Carousel>

              {/* <img /> */}
            </div>

            <div className="px-4 my-5">
              <div>
                <h4 className="text-2xl font-semibold ">Event Description</h4>
                <p className="leading-7">
                  Fashion show organised by NITJ is one of the most awaited and
                  celebrated events of TECHNITI every year we have a foot fall
                  of more than 7000, which includes participants, sponsors and
                  audience. The main purpose of fashion show is not only to
                  showcase the talent, fashion and designs but also to aware
                  about various social issues via different themes. The core
                  idea behind organizing this national level fashion show is to
                  increase interaction among students at various colleges and
                  universities.
                </p>

                <h4 className="text-2xl font-semibold ">Competition Details</h4>
                <div>
                  <p className="leading-7">
                    The fashion show competition will be held in 3 rounds. It
                    should be noted that team size should NOT increase more than
                    30.
                  </p>
                  <ul className="list-unstyled">
                    <li className="my-2">
                      <strong>First round</strong> will be an online round where
                      each team will send us their video clip (maximum 12-15
                      minutes) or photos from their past events and shortlisting
                      for second round will be done on its basis by the jury
                      members.{" "}
                    </li>
                    <li className="my-2">
                      <strong>Second round</strong> will be a offline
                      performance where shortlisted teams will showcase their
                      talent and designs at NITJ venue. The background music,
                      theme understanding, choreography, and dress designs are
                      the parameters that will be judged during the second
                      round. It should be noted that second round is not the
                      elimination round.
                    </li>
                    <li className="my-2">
                      <strong>Third and Final round</strong> will be a Q and A
                      round based on the knowledge of fashion & design. The
                      cumulative results of the second and third round will lead
                      us to the final winner of the fashion show.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionShow;
