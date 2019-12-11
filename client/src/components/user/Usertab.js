import React from "react";
import Login from "./Login";
import Signup from "./Signup";

function Usertab() {
  let navigation = "nav nav-tabs nav-fill nav-justified";
  return (
    <div className="col-12 col-md-6 col-lg-5">
      <ul
        className={sessionStorage.getItem("isAuthorized") ? "d-none" : navigation}
        id="myTab"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="signup-tab"
            data-toggle="tab"
            href="#signup"
            role="tab"
            aria-controls="signup"
            aria-selected="true"
          >
            Sign Up
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="login-tab"
            data-toggle="tab"
            href="#login"
            role="tab"
            aria-controls="login"
            aria-selected="false"
          >
            Login
          </a>
        </li>
      </ul>

      <div className={sessionStorage.getItem("isAuthorized") ? "d-none" : "tab-content"}>
        <div
          className="tab-pane active"
          id="signup"
          role="tabpanel"
          aria-labelledby="signup-tab"
        >
          <Signup />
        </div>
        <div
          className="tab-pane"
          id="login"
          role="tabpanel"
          aria-labelledby="login-tab"
        >
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Usertab;
