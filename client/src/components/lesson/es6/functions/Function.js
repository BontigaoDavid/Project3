import React, {Component} from "react";
import Button from "./Buttons";

class Function extends Component {
    state = {
        clicked: 0
    }

    handleClick = () => {
        this.setState({clicked: this.state.clicked + 1})
        // console.log(this.state.clicked)
    }
    handleUnclick = () => {
        this.setState({clicked: this.state.clicked - 1})
        // console.log(this.state.clicked);
    }
    handleNextLesson = () => {
        console.log("I have been clicked to go to the next lesson and get a badge")
    }


    render () {
        return (<div className = "container">
            <div className = "row"><h2>ES6 Function</h2></div>
        <div className = "row">
            <div className = "col-6" >
                <h1>ES5</h1>
                <p style ={this.state.clicked === 0 ? {display:"block"} : {display: 
            "none"}}>For this lesson, we will be demonstrating the different syntax when defining functions in ES5 and with ES6. </p>
                 <img src="https://i.gyazo.com/bef3cee8c32255f6705b8cb532857052.png" style ={this.state.clicked === 1 ? {display:"block"} : {display: 
            "none"}} alt = "example of es5 function"/>
                <p style ={this.state.clicked === 1 ? {display:"block"} : {display: 
            "none"}}>In this example, we defined a simple function with params for parameters. In order to get value to the console, we had to put a return within the function.</p>
            </div>
            <div className = "col-6" >
                <h1>ES6</h1>
                <p style ={this.state.clicked === 0 ? {display:"block"} : {display: 
            "none"}}>The Fat arrow function is one of the popular features of ES6. It offers two main benefits which is shorter syntax and no binding of "this"</p>
                <img src="https://i.gyazo.com/ad0af77836dfa9470faae1b4da05225f.png" style ={this.state.clicked === 1 ? {display:"block"} : {display: 
            "none"}} alt = "example of es6 function"/>
            <p style ={this.state.clicked === 1 ? {display:"block"} : {display: 
            "none"}}>In this example, we can already see how much shorter the syntax will be when using the big arrow function. It implicitly has a return which allows for an even shorter syntax for functions that are within the same block.</p>
                <img src = "https://i.gyazo.com/a11ef1685385f9947766abdaa1bc758b.png" style = {this.state.clicked === 2 ? {display:"block"}: {display:"none"}} alt = "example of implicit returns" />
                <p style = {this.state.clicked === 2 ? {display:"block"}: {display:"none"}}>In the first example, we kept the function in the same block, allowing for an implicit return. In the second function, we changed it by adding x * y within a block. The console will log undefined for this. As stated in the previous example, implicit return only occurs if it is in the same block. </p>
            </div>
        
            </div>
            
        
            <div className = "row">
                <div className = "col-6">
                <Button onClick = {this.handleUnclick} style = {this.state.clicked > 0 ?{display:"block"} : {display: "none"}}>Previous</Button>
            </div>
            <div className = "col-6">
            <Button onClick ={this.state.clicked < 3 ? this.handleClick : this.handleNextLesson}>Next</Button>
            </div>
            </div>
        </div>)
    }
}
export default Function;
