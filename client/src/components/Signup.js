import React, {Component} from "react";
import API from "../utils/API";
import {Input, FormBtn} from "./includes/Form"

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
      <Input
      value = {this.state.username}
      onChange = {this.handleInputChange}
      name = "username"
      placeholder = "Username (Required)"
      />
       <Input
      value = {this.state.email}
      onChange = {this.handleInputChange}
      name = "email"
      placeholder = "Email (Required)"
      />
       <Input
      value = {this.state.password}
      onChange = {this.handleInputChange}
      name = "password"
      placeholder = "Password (Required)"
      />
      <FormBtn onClick = {this.handleFormSubmit}>Sign Up</FormBtn>
    </form>
  );
}
}

export default Signup;
