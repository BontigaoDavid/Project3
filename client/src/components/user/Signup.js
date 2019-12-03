import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../Form";

class Signup extends Component {
  state = {
    session: false,
    username: "",
    email: "",
    password: ""
  };

  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    event.preventDefault();
    if (this.state.username && this.state.email && this.state.password) {
      API.saveUser(user).then(res => {
        console.log("User saved by API");
        console.log(res);
        sessionStorage.setItem("isAuthorized", true);
        sessionStorage.setItem("user", JSON.stringify(user));
        window.location = "/user";
      });
    }
  };

  render() {
    return (
      <form className="border bg-light p-3 rounded-bottom">
        <Input
          value={this.state.username}
          onChange={this.handleInputChange}
          name="username"
          placeholder="Username (Required)"
        />
        <Input
          value={this.state.email}
          onChange={this.handleInputChange}
          name="email"
          type="email"
          placeholder="Email (Required)"
        />
        <Input
          value={this.state.password}
          onChange={this.handleInputChange}
          name="password"
          type="password"
          placeholder="Password (Required)"
        />
        <FormBtn onClick={this.handleFormSubmit}>Sign Up</FormBtn>
      </form>
    );
  }
}

export default Signup;
