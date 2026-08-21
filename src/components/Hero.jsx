import React from "react";
import "../style/Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="Hero">
      <section className="Hero_left">
        <p className="Hero_Top_name">Hey, I'm Dhiresh</p>

        <h1 className="Hero_Frontend_developer">
          <span>Front</span>end <br />
          Developer
        </h1>

        <p class="Hero_Description">
          I'm a Frontend Developer based in India, I will help you build
          beautiful websites your users will love.
        </p>

        <div class="heroButtons">
          <button class="btnDark" onClick={() => navigate("/contact")}>
            Get In Touch
          </button>
          <button class="btnLight" onClick={() => navigate("/project")}>
            Browse Projects
          </button>
        </div>
      </section>

      <section>
        <div className="imageCircle1">
          <div className="imageCircle2">
            <img
              src="/dhiresh.jpeg"
              alt="Dhiresh-Image"
              className="Profile_Image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
