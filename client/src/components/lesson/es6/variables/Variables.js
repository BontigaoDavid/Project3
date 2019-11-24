import React, {Component} from "react";
import NextBtn from "./NextBtn";

class Variables extends Component {
    state = {
        nextClicked: 0
    }

    handleClick = () => {
        this.setState({nextClicked: this.state.nextClicked + 1})
        console.log(this.state.nextClicked)
    }

    

    render () {
        return (<div className = "row">
            <div className = "col-6" >
                <h1>ES5</h1>
                <p style ={this.state.nextClicked === 0 ? {display:"block"} : {display: 
            "none"}}>var is a generic declaration to define variables. It can be used globally and can be changed outside of the scope it is being used.</p>
                <img src="https://i.gyazo.com/dc7037a779f75185fcf4817ff8e2aa38.png" style ={this.state.nextClicked === 1 ? {display:"block"} : {display: 
            "none"}} alt = "example of var scope"/>
                <p style ={this.state.nextClicked === 1 ? {display:"block"} : {display: 
            "none"}}>In this example, the console will log 55 and 55. Although a is defined within the function as 35, it was redefined within the scope of the if statement to 55.</p>
            </div>
            <div className = "col-6" >
                <h1>ES6</h1>
                <p style ={this.state.nextClicked === 0 ? {display:"block"} : {display: 
            "none"}}>In ES6, let and const replaces var. The let declaration exists only within its scope and can be changed. The const declaration can exist outside of its scope, but cannot be changed.</p>
                <img src="https://i.gyazo.com/6a38383f67a41aeebbeffaae6c7e182a.png" style ={this.state.nextClicked === 1 ? {display:"block"} : {display: 
            "none"}} alt = "example of let scope"/>
            <p style ={this.state.nextClicked === 1 ? {display:"block"} : {display: 
            "none"}}>In this example. the console will log 55 and 35. The variable a is declared as 55 inside the scope of the if statement. It will only exist within its scope, therefore the console logs 35 for the second number.</p>
            </div>
            
            <div className = "row">
            <NextBtn onClick ={this.handleClick}>Next</NextBtn>
            </div>
        </div>)
    }
}


export default Variables;