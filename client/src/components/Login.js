import React, {Component} from "react";
import API from "../utils/API";
import {Input, FormBtn} from "./includes/Form"

class Login extends Component {

  state = {
    session: false,
    email: "",
    password: ""
  }


  componentDidMount() {
    API.findAll()
      .then( res => {
        console.log(res);
      });
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();


    let userData = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(this.state.email);
    console.log(this.state.password);

    API.loginUser(userData)
    .then(res => {
      console.log("logged in!");
    })
  }

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
