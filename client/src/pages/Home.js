import React, { Component } from "react";
import Usertab from "../components/user/Usertab";
// import Parallax from "parallax-js";

class Home extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="bg-img py-5 flex-grow-1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-7">
              <h1 className="welcomeTitle display-3">Welcome to our learning platform!</h1>
              <p className={sessionStorage.getItem("isAuthorized") ? "d-none" : "welcomeSubtitle lead"}>
                If you want to keep track of your progress, it's easy, just sign up!
          </p>
              <p className={sessionStorage.getItem("isAuthorized") ? "welcomeSubtitle lead" : "d-none"}>
                Thank you so much for joining us!
          </p>
            </div>
            <Usertab />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
