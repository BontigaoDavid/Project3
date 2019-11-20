import React from "react";
import Login from "./../components/Login";
import Signup from "./../components/Signup";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-7">
          <h2>Welcome to our learning platform!</h2>
          <p>If you want to keep track of your progress, it's easy, just sign up!</p>
        </div>
        <div className="col-12 col-md-6 col-lg-5">
          {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="true">Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="false">Login</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="signup" role="tabpanel" aria-labelledby="signup-tab"><Signup /></div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Login /></div>
          </div> */}
          <ul className="nav nav-tabs nav-fill nav-justified" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="true">Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="false">Login</a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane active" id="signup" role="tabpanel" aria-labelledby="signup-tab"><Signup /></div>
            <div className="tab-pane" id="login" role="tabpanel" aria-labelledby="login-tab"><Login /></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
