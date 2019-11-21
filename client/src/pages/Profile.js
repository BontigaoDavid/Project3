import React, { Component } from "react";
import Badge from "./../components/Badge";

class Profile extends Component {

  componentDidMount() {
    if(!sessionStorage.getItem("isAuthorized"))
    {
      window.location = "../";
    }
    
    console.log(JSON.parse(sessionStorage.getItem("user")));
  }

  render() {
    return (
      <div className="container">
        <h2>Profile Page</h2>
        <div className="row details">
          <div className="col-12 col-md-3">
            <img className="img-fluid img-thumbnail p-2" src="https://source.unsplash.com/random/800x800" alt="Current User" />
          </div>
          <div className="col-12 col-md-9">
            <h3>RndGirl300</h3>
            <p>
              <strong>Name:</strong> Jane Stiles<br />
              <strong>Email:</strong> example@gmail.com
          </p>
            <h3>Description</h3>
            <p>Whatever information we think we need or want will go here</p>
          </div>
          <div className="panel my-3 p-3 bg-light">
            <h4>Badges</h4>
            <div className="row">
              <Badge />
              <Badge />
              <Badge />
              <Badge />
              <Badge />
              <Badge />
              <Badge />
              <Badge />
              <Badge />
              <Badge />
              <Badge />
              <Badge />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
