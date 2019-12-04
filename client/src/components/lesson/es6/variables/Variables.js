import React, { Component } from "react";
import { FormBtn } from "../../../Form";
import { CardHeader, CardBody } from "./Card";

class Variables extends Component {
  state = {
    clicked: 0
  };

  handleClick = () => {
    this.setState({ clicked: this.state.clicked + 1 });
    // console.log(this.state.clicked)
  };
  handleUnclick = () => {
    this.setState({ clicked: this.state.clicked - 1 });
    // console.log(this.state.clicked);
  };
  handleNextLesson = () => {
    console.log("I have been clicked to go to the next lesson and get a badge");
    window.location = "/lesson/es6/function";
  };

  render() {
    return (
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent p-0 mb-3 d-flex justify-content-end">
            <li className="breadcrumb-item" aria-current="page">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              <a href="/lesson">Lessons</a>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              <a href="/lesson/es6/variables">ES6 Variables</a>
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-12">
            <h2>ES6 Variables</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-lg-6 col-md-6 col-sm-12 d-inline-flex">
            <div className="card mb-2 align-items-stretch">
              <CardHeader
                style={
                  this.state.clicked < 3
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                ES5
              </CardHeader>
              <CardBody>
                <p
                  style={
                    this.state.clicked === 0
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  In ES5, var is a generic declaration to define variables. It
                  can be used globally and can be changed outside of the scope
                  it is being used.
                </p>
                <img
                  src={require("../images/testVar.png")}
                  style={
                    this.state.clicked === 1
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of var scope"
                />
                <img
                  src={require("../images/testVarConsole.png")}
                  style={
                    this.state.clicked === 1
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of var scope"
                />
                <p
                  style={
                    this.state.clicked === 1
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  In this example, the console will log 55 and 55. Although a is
                  defined within the function as 35, it was reassigned within
                  the scope of the if statement to 55.
                </p>
                <img
                  src={require("../images/testVarArray.png")}
                  style={
                    this.state.clicked === 2
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of var array"
                />
                 <img
                  src={require("../images/testVarArrayConsole.png")}
                  style={
                    this.state.clicked === 2
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of var array"
                />
                <p
                  style={
                    this.state.clicked === 2
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  In this example, the console will display an array with
                  'red','green', and 'blue' and an array with 'yellow'. With
                  var, we are able to redefine the properties of the variable.{" "}
                </p>
                <p
                  style={
                    this.state.clicked === 3
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  Thank you for using Simply Conceptual! Click on previous if
                  you want to go back and look at the examples used. We
                  encourage you to create your own variables to test scoping and
                  the reassignment of values.{" "}
                </p>
              </CardBody>
            </div>
          </div>
          <div className="col-6 col-lg-6 col-md-6 col-sm-12 d-inline-flex">
            <div className="card mb-2 align-items-stretch">
              <CardHeader
                style={
                  this.state.clicked < 3
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                ES6
              </CardHeader>
              <CardBody>
                {" "}
                <p
                  style={
                    this.state.clicked === 0
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  In ES6, let and const replaces var. The let and const
                  declaration exists only within its scope, aka block scope. The
                  key differences between let and const is that one can be
                  reassigned and the other cannot.
                </p>
                <img
                  src={require("../images/testLet.png")}
                  style={
                    this.state.clicked === 1
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of let scope"
                />
                <img
                  src={require("../images/testLetConsole.png")}
                  style={
                    this.state.clicked === 1
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of let scope"
                />
                <p
                  style={
                    this.state.clicked === 1
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  In this example. the console will log 55 and 35. The variable
                  a is declared as 55 inside the scope of the if statement. It
                  will only exist within its scope, therefore the console logs
                  35 for the second number. We would get the same result here
                  when we replace let with const.
                </p>
                <img
                  src={require("../images/testConstArray.png")}
                  style={
                    this.state.clicked === 2
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of const array"
                />
                <img
                  src={require("../images/testConstArrayConsole1.png")}
                  style={
                    this.state.clicked === 2
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of const array"
                />
                <img
                  src={require("../images/testConstArrayConsole2.png")}
                  style={
                    this.state.clicked === 2
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of const array"
                />
                <p
                  style={
                    this.state.clicked === 2
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  In this example, the first console.log will display the first
                  arrray as the var example. However, the second console.log
                  will result in an error. const is a fixed variable and cannot
                  be reassigned. However, if we do a push, it will console.log
                  all the colors used. Although const cannot be reassigned, it
                  can still be altered.{" "}
                </p>
                <p
                  style={
                    this.state.clicked === 3
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  {" "}
                  Click on next if you would like to move onto the next lesson
                  in ES6, Functions!
                </p>
              </CardBody>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-lg-6 col-md-6 col-sm-12">
            <FormBtn
              onClick={this.handleUnclick}
              style={
                this.state.clicked > 0
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              Previous
            </FormBtn>
          </div>
          <div className="col-6 col-lg-6 col-md-6 col-sm-12">
            <FormBtn
              onClick={
                this.state.clicked < 3
                  ? this.handleClick
                  : this.handleNextLesson
              }
            >
              Next
            </FormBtn>
          </div>
        </div>
      </div>
    );
  }
}

export default Variables;
