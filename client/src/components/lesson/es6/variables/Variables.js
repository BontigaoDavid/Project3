import React, {Component} from "react";
import Button from "./Buttons";

class Variables extends Component {
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
        window.location = "/lesson/es6/function"
    }

    render () {
        return (<div className = "container">
            <div className = "row"><h2>ES6 Variables</h2></div>
        <div className = "row">
            <div className = "col-6" >
                <h1>ES5</h1>
                <p style ={this.state.clicked === 0 ? {display:"block"} : {display: 
            "none"}}>var is a generic declaration to define variables. It can be used globally and can be changed outside of the scope it is being used.</p>
                <img src="https://i.gyazo.com/9a99adbc673b12ca2c13ca54b7b5e007.png" style ={this.state.clicked === 1 ? {display:"block"} : {display: 
            "none"}} alt = "example of var scope"/>
                <p style ={this.state.clicked === 1 ? {display:"block"} : {display: 
            "none"}}>In this example, the console will log 55 and 55. Although a is defined within the function as 35, it was reassigned within the scope of the if statement to 55.</p>
            <img src="https://i.gyazo.com/fbc0d7f047be4a30f89c118cdb8451d5.png" style ={this.state.clicked === 2 ? {display:"block"} : {display: 
            "none"}} alt = "example of var array"/>
                <p style = {this.state.clicked === 2 ? {display: "block"}: {display:"none"}}>In this example, the console will display an array with 'red','green', and 'blue' and an array with 'yellow'. With var, we are able to redefine the properties of the variable. </p>
                <p style = {this.state.clicked === 3 ? {display: "block"}: {display:"none"}}>Click on previous if you want to go back and look at the examples used. We encourage you to create your own variables to test scoping and the reassignment of values. </p>

            </div>
            <div className = "col-6" >
                <h1>ES6</h1>
                <p style ={this.state.clicked === 0 ? {display:"block"} : {display: 
            "none"}}>In ES6, let and const replaces var. The let declaration exists only within its scope and can be changed. The const declaration can exist outside of its scope, but cannot be changed.</p>
                <img src="https://i.gyazo.com/6a38383f67a41aeebbeffaae6c7e182a.png" style ={this.state.clicked === 1 ? {display:"block"} : {display: 
            "none"}} alt = "example of let scope"/>
            <p style ={this.state.clicked === 1 ? {display:"block"} : {display: 
            "none"}}>In this example. the console will log 55 and 35. The variable a is declared as 55 inside the scope of the if statement. It will only exist within its scope, therefore the console logs 35 for the second number.</p>
            <img src="https://i.gyazo.com/e9964bb2fa08cc8da90aec7e744ecded.png" style ={this.state.clicked === 2 ? {display:"block"} : {display: 
            "none"}} alt = "example of const array"/>
                <p style = {this.state.clicked === 2 ? {display: "block"}: {display:"none"}}>In this example, the first console.log will display the first arrray as the var example. However, the second console.log will result in an error. const is a fixed variable and cannot be reassigned. However, if we do a push, it will console.log all the colors used. Although const cannot be reassigned, it can still be altered.  </p>
                <p style = {this.state.clicked === 3 ? {display: "block"}: {display:"none"}}>Click on next if you would like to move onto the next lesson! </p>

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


export default Variables;