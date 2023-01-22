import React from "react";
import ajinkya from "../files/ajinkya.jpg";
const Workshop = () => {
  return (
    <div className="container">
      <div className="singleevents">
        <div className="para-text flex justify-evenly p-1 gap-5 ">
          <div>
            <h1 className="text-center  ">2 Day Workshop</h1>
            <h3 className="text-center  ">Ethical Hacking/Blockchain</h3>
          </div>

          <div className="px-1 ">
            <div>
              <h4 className="text-2xl font-semibold text-color">
                Event Description
              </h4>
              <p className="">
                Team Technical Affairs is organizing a 2 day workshop on Ethical
                Hacking and Blockchain which will be conducted on 4 and 5 Feb
                2023. Attend the workshops and get a{" "}
                <span className="text-color">
                  chance to intern with Ditto Security: A Cyber Security
                  Startup.
                </span>
              </p>
            </div>
            <h2 className="text-color ">Perks of Workshop</h2>
            <p className="">
              <li>A paid internship with Cyber Security Startup.</li>
              <li>Certificates on Completion of Workshops.</li>
              <li>Goodies and Swags. (Suspense)</li>
              <li>Coupons and Stickers.</li>
              <li>Projects for your resume.</li>
              <li>And many more surprises.</li>
            </p>
            <h2 className="text-color">Details :</h2>
            <ul>
              <li className="leading-7">Venue: Lecture Theatre (LT) -402</li>
              <li>Each workshop will be of 3 to 4 hrs max.</li>
              <li className="leading-7">
                Registration for workshop is{" "}
                <span className="text-color">
                  Rs 749/- for first 100 participants and after that Rs 1000/-
                </span>
              </li>
            </ul>
            <p className="text-color">
              Note: Registration is open for limited Period of Time.
            </p>

            <h2 className="text-color text-center">About Speaker</h2>
            <div className="d-flex justify-content-center ">
              <img src={ajinkya} class="image-size rounded w-50" />
            </div>
            <h4 className="text-center mt-4 text-color">
              Mr. Ajinkya Lohakare
            </h4>
            <ul className="text-center">
              <p className="leading-7">CTO and Founder of Ditto security.</p>
              <p>CEH, CHFI, LPT, Penetration Tester , BUG BOUNTY Hacker.</p>
              <p>Josh talk and Tedx Speaker, Ethical Hacker.</p>
            </ul>
            <div>
              <p>
                Mr. Ajinkya Lohakare is a highly accomplished professional with
                a wealth of experience in the field of cybersecurity. As a
                security consultant, ethical hacking expert, and cyber security
                researcher, he brings a wealth of knowledge and expertise to the
                table.
              </p>
              <p>
                In addition to his role as CTO of Ditto Security, an information
                security-based innovation center, Mr. Lohakare has also been a
                security consultant for Fortune 500 companies and law
                enforcement agencies.
              </p>
              <p>
                He has also taught social engineering classes to many companies
                and government agencies and has assisted law enforcement in
                India, Bangladesh, and Sri Lanka on cybercrime. With over 500
                workshops and talks under his belt, including as a TEDx speaker
                and at events like JOSH TALK, VEDH TALK and THE DAIS CONCLAVE.
                Mr. Lohakare is a highly sought-after speaker and a true expert
                in his field.
              </p>
              <a
                href="https://forms.gle/k5BuoSoYThWQUXmWA"
                className=""
                target="_blank"
              >
                <button className="btn  d-flex btn-green mx-auto w-125 rounded">
                  Register Here
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
