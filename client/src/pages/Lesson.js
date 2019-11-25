import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BoxModel from "./../components/lesson/css/box-model/Lesson"

function Lesson() {
  console.log("Lesson page loaded")
  return (
    <Router>
      <div className="container">
      <h2>Lesson Page</h2>
      <Route path="/lesson/css/box-model" component={BoxModel} />
    </div>
    </Router>
    
  );
}

export default Lesson;
