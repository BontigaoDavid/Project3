import React, { Component } from "react";
import { FormBtn } from "../../../Form";
import { CardHeader, CardBody } from "./Card";

class Function extends Component {
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
    window.location = "/lesson/logic/mvc";
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
              <a href="/lesson/es6/function">ES6 Functions</a>
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-12">
            <h2>ES6 Function</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-lg-6 col-md-12 col-sm-12 d-inline-flex">
            <div className="card align-items-stretch">
              <CardHeader
                style={
                  this.state.clicked < 5
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
                  For this lesson, we will be demonstrating the different syntax
                  when defining functions in ES5 and with ES6.{" "}
                </p>
                <img
                  src={require("../images/ES5Return.png")}
                  style={
                    this.state.clicked === 1
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of es5 function"
                />
                <img
                  src={require("../images/ES5&6ReturnConsole.png")}
                  style={
                    this.state.clicked === 1
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of es5 function"
                />
                <p
                  style={
                    this.state.clicked === 1
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  In this example, we defined a simple function with params for
                  parameters. In order to get value to the console, we had to
                  put a return within the function.
                </p>
                <img
                  src={require("../images/ES5Return.png")}
                  style={
                    this.state.clicked === 2
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of es5 function"
                />
                <img
                  src={require("../images/ES5ReturnConsole.png")}
                  style={
                    this.state.clicked === 2
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of es5 function"
                />
                <p
                  style={
                    this.state.clicked === 2
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  In this example, we defined a simple function with params for
                  parameters. In order to get value to the console, we had to
                  put a return within the function.
                </p>
                <img
                  src={require("../images/ES5This.png")}
                  style={
                    this.state.clicked === 3
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="es5 this example"
                ></img>
                <img
                  src={require("../images/ES5ThisConsole.png")}
                  style={
                    this.state.clicked === 3
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="es5 this example"
                ></img>
                <p
                  style={
                    this.state.clicked === 3
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  In this example, the console will log the string when we call
                  the function. This is because when we use var, by default it
                  will assign itself globally if it is not within a scope.
                  Therefore, it belongs to the window object in this example.
                  The "this" is bound to the window object and when we call
                  "this.x", we are grabbing x from within object. Try
                  console.log(this) and you can find x.
                </p>
                <img
                  src={require("../images/ES5ThisError.png")}
                  style={
                    this.state.clicked === 4
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="es5 issues with this"
                ></img>
                 <img
                  src={require("../images/ES5ThisErrorConsole.png")}
                  style={
                    this.state.clicked === 4
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="es5 issues with this"
                ></img>
                <p
                  style={
                    this.state.clicked === 4
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  As mentioned in the previous example, "this" is bound globally
                  as the window object. The "this" in the current example is
                  searching for firstName and lastName within the window object,
                  but they exist only within the scope of testObj. Therefore, we
                  receive undefined undefined in the console. Add a
                  console.log(this) after line 6 and test for yourself.
                </p>
                <p
                  style={
                    this.state.clicked === 5
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  Thank you for using Simply Conceptual. This is the end of our
                  ES6 lessons. We hope our examples and explanations help you
                  have a better understanding of what ES6 has to offer. Click on
                  previous if you would like to go back to the lesson.
                </p>
              </CardBody>
            </div>
          </div>
          <div className="col-6 col-lg-6 col-md-12 col-sm-12 d-inline-flex">
            <div className="card mb-2 align-items-stretch">
              <CardHeader
                style={
                  this.state.clicked < 5
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                ES6
              </CardHeader>
              <CardBody>
                <p
                  style={
                    this.state.clicked === 0
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  The Fat arrow function is one of the popular features of ES6.
                  It offers two main benefits which are shorter syntax and no
                  binding of "this".
                </p>
                <img
                  src={require("../images/ES6Return.png")}
                  style={
                    this.state.clicked === 1
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of es6 function"
                />
                <img
                  src={require("../images/ES5&6ReturnConsole.png")}
                  style={
                    this.state.clicked === 1
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of es6 function"
                />
                <p
                  style={
                    this.state.clicked === 1
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  In this example, we can already see how much shorter the
                  syntax will be when using the big arrow function. It
                  implicitly has a return which allows for an even shorter
                  syntax for functions that are within the same block.
                </p>
                <img
                  src={require("../images/ES6ReturnBlock.png")}
                  style={
                    this.state.clicked === 2
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of implicit returns"
                />
                 <img
                  src={require("../images/ES6ReturnBlockConsole.png")}
                  style={
                    this.state.clicked === 2
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="example of implicit returns"
                />
                <p
                  style={
                    this.state.clicked === 2
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  In the first example, we kept the function in the same block,
                  allowing for an implicit return. In the second function, we
                  changed it by adding x * y within a block. The console will
                  log undefined for this. As stated in the previous example,
                  implicit return only occurs if it is in the same block.{" "}
                </p>
                <img
                  src={require("../images/ES6This.png")}
                  style={
                    this.state.clicked === 3
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="es6 this example"
                ></img>
                <img
                  src={require("../images/ES6ThisConsole.png")}
                  style={
                    this.state.clicked === 3
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="es6 this example"
                ></img>
                <p
                  style={
                    this.state.clicked === 3
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  In ES6, "this" is lexically bound, meaning it uses "this" from
                  the code that contains the arrow function. In this example,
                  the window object is the code that contains the arrow
                  function, therefore "this" is bound to it. As we mentioned in
                  the Variables lesson, let and const variables exist within its
                  block scope. Therefore, "this.y" returns undefined.{" "}
                </p>
                <img
                  src={require("../images/ES6ThisLexical.png")}
                  style={
                    this.state.clicked === 4
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="es6 lexical scope example"
                ></img>
                <img
                  src={require("../images/ES6ThisLexicalConsole.png")}
                  style={
                    this.state.clicked === 4
                      ? { display: "block" }
                      : { display: "none" }
                  }
                  alt="es6 lexical scope example"
                ></img>
                <p
                  style={
                    this.state.clicked === 4
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  For this example, we demonstrate what lexical scoping is and
                  how it relates to "this" in ES6. The testObj is the code that
                  contains the arrow function (setTimeout), therefore testObj is
                  "this". We are able to receive "Jane Do" in the console. Add a
                  console.log(this) after line 6 and note what the result is
                  compared to the ES5 example.{" "}
                </p>
                <p
                  style={
                    this.state.clicked === 5
                      ? { display: "block", paddingTop: "1rem" }
                      : { display: "none" }
                  }
                >
                  Click on next if you would like to move onto our lesson over
                  Models-Views-Controllers.
                </p>
              </CardBody>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-lg-6 col-md-12 col-sm-12">
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
          <div className="col-6 col-lg-6 col-md-12 col-sm-12">
            <FormBtn
              onClick={
                this.state.clicked < 5
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
export default Function;
