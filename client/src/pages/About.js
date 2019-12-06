import React from "react";
import Team from "../components/About/Team";

function About() {
  return (
    <div>
    
      <div className="bg-about" >
        <h2 className="text-center display-4 mb-5 pt-5 text-light">About</h2>
        <p className="lead w-50 pb-5 mx-auto mb-0 text-light">
          For this project, we wanted to address a common issue that others
          in our industry would face and provide them with a solution. After a lot of
          brainstorming, we came up with the idea to create a web application that simplifies
          coding concepts that our cohort struggled with. This web application will help new 
          developers have a better understanding of the subjects that we cover.
        </p>
      </div>
      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 d-inline-flex align-items-center">
              <img className="w-100" src="https://source.unsplash.com/HUiSySuofY0/800x450" alt="gray mini figure under white sneaker" />
            </div>
            <div className="col-12 col-sm-8 d-inline-flex  flex-column justify-content-center">
              <h3>
                <i className="fas fa-exclamation-triangle"></i> The Problem
              </h3>
              <p>
                Coding is a very massive subject and there is a lot of subject
                matter to go over. For new developers that are self-taught or
                those in an accelerated course, the material can be very
                overwhelming. Subjects such as CSS, JavaScript, and algorithms
                can be hard to grasp. We simplified these subjects in order to
                assist aspiring developers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 mt-3 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 d-inline-flex flex-column justify-content-center">
              <h3>
                <i className="fas fa-bullseye"></i> The Goal
              </h3>
              <p>
                Our goal is to be masters of the subjects that we cover in order
                to provide content that makes coding concepts simple and
                understandable for aspiring developers to retain and put to
                future use. We plan on mastering more concepts in the future and
                building more content for this web application.
              </p>
            </div>
            <div className="col-12 col-sm-4 d-inline-flex align-items-center">
              <img className="w-100" src="https://source.unsplash.com/6zwP57Z4lTg/800x450" alt="worm's view of soccer goalie on lawn near tall trees" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 d-inline-flex align-items-center">
              <img className="w-100" src="https://source.unsplash.com/IClZBVw5W5A/800x450" alt="clothes iron, hammer, axe, flashlight and pitcher on brown wooden table" />
            </div>
            <div className="col-12 col-sm-8 d-inline-flex flex-column justify-content-center">
              <h3>
                <i className="fas fa-wrench"></i> The Tools
              </h3>
              <p>
                This project was built mainly with React, utilizing JSX to
                create the web application that follows the
                Model-Views-Controller design pattern. This project was also
                build with Node, Express, mongoose, axios and bcrypt. Our
                front-end was polished with Bootstrap and CSS3.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-4 bg-gray">
        <div className="container">
          <h3><i className="fas fa-users"></i> The Team</h3>
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
              linkedin="johnphtdo"
              portfolio="https://johnphtdo.herokuapp.com/"
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
