import React from "react";
import "../style/Experience.css";
import { Check } from "lucide-react";

const Experience = () => {
  return (
    <section className="experience">
      <h1 className="experienceTitle">
        Experience<span>.</span>
      </h1>

      <div className="experienceContainer">
        {/* Left Side */}

        <div className="companyList">
          <button className="activeCompany">Applei will delete this experience section and replace with projects section with a browse project button</button>
          <button>Microsoft</button>
          <button>Spotify</button>
          <button>Stripe</button>
          <button>Webflow</button>
        </div>

        {/* Right Side */}

        <div className="experienceContent">
          <h2>
            Engineer @ <span>Apple</span>
          </h2>

          <p className="date">May 2018 - Present</p>

          <div className="workList">
            <div className="workItem">
              <Check size={20} />
              <p>Developed and shipped highly interactive web applications.</p>
            </div>

            <div className="workItem">
              <Check size={20} />
              <p>Built scalable applications using React, Node.js and APIs.</p>
            </div>

            <div className="workItem">
              <Check size={20} />
              <p>
                Improved website performance and user experience across devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
