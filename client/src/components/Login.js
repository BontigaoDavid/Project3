import React, {Component} from "react";
import API from "../utils/API";
import {Input, FormBtn} from "./includes/Form"

class Login extends Component {

  state = {
    session: false,
    email: "",
    password: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render () {
  return (
    <form className="border bg-light p-3 rounded">
       <Input
      value = {this.state.email}
      onChange = {this.handleInputChange}
      type = "email"
      name = "email"
      placeholder = "Email (Required)"
      />
       <Input
      value = {this.state.password}
      type = "password"
      onChange = {this.handleInputChange}
      name = "password"
      placeholder = "Password (Required)"
      />
      <FormBtn onClick = {this.handleFormSubmit}>Log In</FormBtn>
    </form>
  );
}
}

export default Login;
