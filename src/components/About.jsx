import React from "react";
import "../style/About.css";

const About = () => {
  return (
    <section className="about">
      <div className="aboutHeading">
        <h1>
          About me<span>.</span>
        </h1>

        <div className="aboutLine">
          <div className="line"></div>

          <p>
            Developing beautiful and functional websites is what I love doing,
            and that's why I give my all in every new challenge.
          </p>
        </div>
      </div>

      <div className="aboutCards">
        {/* Left Card */}

        <div className="stackCard">
          <h2>
            My Stack<span>.</span>
          </h2>

          <div className="stackBox">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Supabase</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Responsive Design</span>
          </div>
        </div>

        {/* Right Card */}

        <div className="placeCard">
          <h2>
            My Special Place<span>.</span>
          </h2>

          <div className="placeImage">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
