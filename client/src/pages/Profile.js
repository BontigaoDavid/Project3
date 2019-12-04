import React, { Component } from "react";
import Badge from "../components/user/Badge";

class Profile extends Component {

  state = {
    username: "",
    email: ""
  }

  componentDidMount() {
    if(!sessionStorage.getItem("isAuthorized"))
    {
      window.location = "../";
    }
    
    // const userObj = JSON.parse(sessionStorage.getItem("user"));
    // console.log(userObj)
    this.handleProfile()
  }

  handleProfile = () => {
    const userObj = JSON.parse(sessionStorage.getItem("user"));
    // console.log(userObj)
    
    this.setState ({
      username: userObj.username,
      email: userObj.email

    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2>Profile Page</h2>
          <div className="row details mb-5">
            <div className="col-12 col-md-3">
              <img className="img-fluid img-thumbnail p-2" src="https://source.unsplash.com/random/800x800" alt="Current User" />
            </div>
            <div className="col-12 col-md-9">
              <h3>{this.state.username}</h3>
              <p>
                {/* <strong>Name:</strong> Jane Stiles<br /> */}
                <strong>Email:</strong> {this.state.email}
            </p>
              <h3>Description</h3>
              <p>Whatever information we think we need or want will go here</p>
            </div>
          </div>
        </div>
        <div className="panel my-3 p-3 bg-gray">
          <div className="container">
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
