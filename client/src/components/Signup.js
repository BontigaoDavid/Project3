import React, {Component} from "react";
import API from "../utils/API";

class Signup extends Component {
  state = {
    session: false,
    username: "",
    email: "",
    password: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.username && this.state.email && this.state.password) {
    API.saveUser({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
}






  render () {
  return (
    <form className="border bg-light p-3 rounded">
      <div className="form-group">
        <label htmlFor="signUpUsername">Username</label>
        <input type="text" className="form-control" value = {this.state.username} name="username" onChange = {this.handleInputChange} id="signUpUsername" placeholder="Username" />
      </div>
      <div className="form-group">
        <label htmlFor="signUpEmail">Email address</label>
        <input type="email" className="form-control" value = {this.state.email} name="email" onChange = {this.handleInputChange} id="signUpEmail" aria-describedby="emailHelp" placeholder="Enter email" />
        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div className="form-group">
        <label htmlFor="signUpPassword">Password</label>
        <input type="password" className="form-control" value = {this.state.password} name="password" onChange = {this.handleInputChange} id="signUpPassword" placeholder="Password" />
      </div>
      <button type="Signup" className="btn btn-primary" onClick = {this.handleFormSubmit}>Signup</button>
    </form>
  );
}
}

export default Signup;
