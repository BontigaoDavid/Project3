<<<<<<< HEAD
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import tableOfContents from "./../components/lesson/home/home";

function Lesson ({match}) { 

  console.log(match);

    return (
      <Router>
        <div className="container">


          <Route component={tableOfContents} />

          {/* <h2>Lesson Page</h2> */}
          

        </div>
      </Router>

    );
  }
=======
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BoxModel from "./../components/lesson/css/box-model/Lesson";
import MVC from "./../components/lesson/algorithms/mvc/mvc";
import Variables from "../components/lesson/es6/variables/Variables";
import Function from "../components/lesson/es6/functions/Function";
import Lessons from "../components/lesson/index"

function Lesson() {
  console.log("Lesson page loaded");
  return (
    <Router>
      <div className="container">
        {/* <h2>Lesson Page</h2> */}
        <Switch>
          <Route exact path="/lesson" component={Lessons} />
          <Route path="/lesson/css/box-model" component={BoxModel} />
          <Route path="/lesson/es6/variables" component={Variables} />
          <Route path="/lesson/algorithms/mvc" component={MVC} />
          <Route path="/lesson/es6/function" component={Function} />
        </Switch>
      </div>
    </Router>
  );
}
>>>>>>> b802c0ded1fee7d22e7f73e7138319b0222d3aa3

export default Lesson;
