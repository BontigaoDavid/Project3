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
        <div className = "row">
            <div className = "col-6" >
                <h1>ES5</h1>
               
            </div>
            <div className = "col-6" >
                <h1>ES6</h1>
                
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
