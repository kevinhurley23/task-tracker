import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <p>Inspired by Brad Travery, coded and modified by Kevin Hurley</p>
      <Link to="/" style={{ color: "black" }}>
        Go Back
      </Link>
    </div>
  );
};

export default About;
