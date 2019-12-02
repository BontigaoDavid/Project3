import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import tableOfContents from "./../components/lesson/index";

function Lesson({ match }) {
  console.log(match);

  return (
    <div className="container">
      <Router>
        <Route component={tableOfContents} />
        
        {/* <h2>Lesson Page</h2> */}
      </Router>
    </div>
  );
}

export default Lesson;
