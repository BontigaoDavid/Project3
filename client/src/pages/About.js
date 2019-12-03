import React from "react";
import Team from "../components/About/Team";

function About() {
  return (
    <div>
      <div className="container mb-4">
        <h2>About</h2>
        <p>
          In this project we wish to put together some explanations of
          some concepts we've come across and struggled with to deepen
          understanding and help others who are struggling with these
          concepts as well.
        </p>
      </div>
      <div className="py-4 my-3 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4">
              <h3><i className="fas fa-exclamation-triangle"></i> The Problem</h3>
              <p>
                It can be hard to understand some concepts or details about css,
                javascript and algorithms. When you're taking an accelerated
                course, it can be even harder to grasp.
              </p>
            </div>
            <div className="col-12 col-sm-4">
              <h3><i className="fas fa-bullseye"></i> The Goal</h3>
              <p>
                Our goal is to try to explain concepts in a simple and
                understandable way to make these things easier to pick up.
              </p>
            </div>
            <div className="col-12 col-sm-4">
              <h3><i className="fas fa-wrench"></i> The Tools</h3>
              <p>
                This project was built with React, Node, Express, mongoose,
                axios, bcrypt, and SASS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row py-4 my-3 bg-gray">
        <div className="container">
          <h3>The Problem</h3>
          <p>
            It can be hard to understand some concepts or details about css,
            javascript and algorithms. When you're taking an accelerated course,
            it can be even harder to grasp.
          </p>
        </div>
      </div>
      <div className="row py-4 my-3">
        <div className="container">
          <h3>The Goal</h3>
          <p>Our goal is to try to explain concepts in a simple and understandable way to make these things easier to pick up.</p>
        </div>
      </div>
      <div className="row py-4 my-3 bg-gray">
        <div className="container">
          <h3>The Project</h3>
          <p>
            In this project we wish to put together some explanations of some
            concepts we've come across and struggled with to deepen
            understanding and help others who are struggling with these concepts
            as well.
          </p>
          <h4 className="h5">Built with:</h4>
          <p>
            This project was built with React, Node, Express, mongoose, axios, bcrypt, and SASS
          </p>
        </div>
      </div> */}
      <div className="row py-4 my-3">
        <div className="container">
          <h3>The Team</h3>
          <div className="row">
            <Team
              name="David Bontiago"
              user="BontigaoDavid"
              src="https://avatars1.githubusercontent.com/u/43974452?s=460&v=4"
              github="BontigaoDavid"
            />
            <Team
              name="John Do"
              user="Johnphtdo"
              src="https://avatars0.githubusercontent.com/u/55046389?s=460&v=4"
              github="Johnphtdo"
              linkedin="john-do-a02a4661"
            />
            <Team
              name="Jasmine Tsai"
              user="jtsai972"
              src="https://avatars2.githubusercontent.com/u/48503405?s=460&v=4"
              website="https://jtsai972.space"
              github="jtsai972"
              linkedin="jasmine-tsai"
              codepen="https://codepen.io/jtsai972/"
              portfolio="https://jtsai972.github.io/Github-Portfolio/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
