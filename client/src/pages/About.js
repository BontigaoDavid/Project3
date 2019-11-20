import React from "react";
import Team from "./../components/Team";

function About() {
  return (
    <div className="container">
      <h2>About</h2>
      <h3>The Problem</h3>
      <h3>The Goal</h3>
      <h3>The Project</h3>
      <h4>Built with:</h4>
      <p>
        This project was built with React, Node, Express, mongoose, axios, and
        bcrypt
      </p>
      <h3>The Team</h3>
      <div className="row">
        <Team
          name={"David Bontiago"}
          user={"BontigaoDavid"}
          src={"https://avatars1.githubusercontent.com/u/43974452?s=460&v=4"}
        />
        <Team
          name={"John Do"}
          user={"Johnphtdo"}
          src={"https://avatars0.githubusercontent.com/u/55046389?s=460&v=4"}
        />
        <Team
          name={"Jasmine Tsai"}
          user={"jtsai972"}
          src={"https://avatars2.githubusercontent.com/u/48503405?s=460&v=4"}
        />
      </div>
    </div>
  );
}

export default About;
