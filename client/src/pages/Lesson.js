import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BoxModel from "./../components/lesson/css/box-model/BoxModel"
import Variables from "../components/lesson/es6/variables/Variables"

function Lesson() {
  console.log("Lesson page loaded")
  return (
    <Router>
      <div className="container">
      <h2>Lesson Page</h2>
      <Route path="/lesson/css/box-model" component={BoxModel} />
      <Route path="/lesson/es6/variables" component={Variables}/>
    </div>
    </Router>
    
  );
}

export default Lesson;
