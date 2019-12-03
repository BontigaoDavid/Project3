import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../Form";

class Login extends Component {
  state = {
    session: false,
    email: "",

    password: "",
    failedLogin: false
  };

  componentDidMount() {

    API.findAll()
      .then(res => {
        // console.log(res);
      });
    // console.log("Authorized: "+sessionStorage.getItem("isAuthorized"));

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
    };

    // console.log(this.state.email);
    // console.log(this.state.password);



    API.loginUser(userData).then(res => {
      
      if (!res.data) {
        console.log("Error")
          this.setState({failedLogin:true})
          this.setState({email: ""})
          this.setState({password: ""})
        
      }

        else {
          console.log(res.data)
          sessionStorage.setItem("isAuthorized", true);
          sessionStorage.setItem("user", JSON.stringify(res.data));
          window.location = "/user";
        }
      })
  }

  render() {
    return (
      <form className="border bg-light p-3 rounded-bottom">

        <div
          className="alert alert-info text-center"
          role="alert"
          style={ this.state.failedLogin ? {display: "block"} : {display: "none"}  }
        >
          Incorrect Email and Password Combination
        </div>

        <Input
          value={this.state.email}
          onChange={this.handleInputChange}
          type="email"
          name="email"
          placeholder="Email (Required)"
        />
        <Input
          value={this.state.password}
          type="password"
          onChange={this.handleInputChange}
          name="password"
          placeholder="Password (Required)"
        />
        <FormBtn onClick={this.handleFormSubmit}>Log In</FormBtn>
      </form>
    );
  }
}

export default Login;
