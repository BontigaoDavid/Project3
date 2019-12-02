import React from "react";
import { Link } from "react-router-dom";

function Lessons() {
  return (
    <div className="lessons">
      <ul class="list-group">
        <li class="list-group-item">
          <Link to="/lesson/css/box-model">CSS Box Model</Link>
        </li>
        <li class="list-group-item">
          <Link to="/lesson/es6">CSS Box Model</Link>
        </li>
        <li class="list-group-item">
          
        </li>
      </ul>
    </div>
  );
}

export default Lessons;
