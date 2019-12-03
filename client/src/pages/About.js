import React from "react";
import Team from "../components/About/Team";

function About() {
  return (
    <div>
      <div className="container mb-4">
        <h2>About</h2>
        <p>
          For this project, we wanted to address a common issue that others
          in our industry would face and provide them with a solution. After a lot of
          brainstorming, we came up with the idea to create a web application that simplifies
          coding concepts that our cohort struggled with. This web application will help new 
          developers have a better understanding of the subjects that we cover.

        </p>
      </div>
      <div className="py-4 my-3 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4">
              <h3><i className="fas fa-exclamation-triangle"></i> The Problem</h3>
              <p>
                Coding is a very massive subject and there is a lot of subject matter to go over. 
                For new developers that are self-taught or those in an accelerated course,
                the material can be very overwhelming. Subjects such as CSS, JavaScript, and algorithms
                can be hard to grasp. We simplified these subjects in order to assist aspiring developers.   
              </p>
            </div>
            <div className="col-12 col-sm-4">
              <h3><i className="fas fa-bullseye"></i> The Goal</h3>
              <p>
                Our goal is to be masters of the subjects that we cover
                in order to provide content that makes coding concepts simple
                and understandable for aspiring developers to retain and put to future use.
                We plan on mastering more concepts in the future and building more content
                for this web application.
                
              </p>
            </div>
            <div className="col-12 col-sm-4">
              <h3><i className="fas fa-wrench"></i> The Tools</h3>
              <p>
                This project was built mainly with React, utilizing JSX to create the web application
                that follows the Model-Views-Controller design pattern. This project was also build with Node, Express, mongoose,
                axios and bcrypt. Our front-end was polished with Bootstrap and CSS3.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-4 my-3">
        <div className="container">
          <h3>The Team</h3>
          <div className="row">
            <Team
              name="David Bontiago"
              user="BontigaoDavid"
              src={require("../components/About/images/david-cropped.jpg")}
              github="BontigaoDavid"
              linkedin="david-bontigao-7bb529150"
            />
            <Team
              name="John Do"
              user="Johnphtdo"
              src={require("../components/About/images/john-cropped.jpg")}
              github="Johnphtdo"
              linkedin="john-do-a02a4661"
            />
            <Team
              name="Jasmine Tsai"
              user="jtsai972"
              src={require("../components/About/images/jasmine-cropped.jpg")}
              github="jtsai972"
              linkedin="jasmine-tsai"
              portfolio="https://jtsai972.github.io/Github-Portfolio/"
              codepen="https://codepen.io/jtsai972/"
              website="https://jtsai972.space"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
