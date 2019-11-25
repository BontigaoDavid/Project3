import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BoxModel from "./../components/lesson/css/box-model/Lesson";
import Variables from "../components/lesson/es6/variables/Variables";
import Function from "../components/lesson/es6/functions/Function";

function Lesson() {
  console.log("Lesson page loaded")
  return (
    <Router>
      <div className="container">
      {/* <h2>Lesson Page</h2> */}
      <Route path="/lesson/css/box-model" component={BoxModel} />
      <Route path="/lesson/es6/variables" component={Variables}/>
      <Route path="/lesson/es6/function" component={Function}/>


    </div>
    </Router>
    
  );
}

export default Lesson;
