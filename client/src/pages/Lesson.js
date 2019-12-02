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

export default Lesson;
