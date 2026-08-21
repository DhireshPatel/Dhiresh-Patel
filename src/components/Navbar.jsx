import React from "react";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navLogo">
          <b>Dhiresh PATEL <span>.</span></b>
        </div>

        <div className="navLi">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/project">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
