import React from "react";
import Explanation from "./Explanation";
import Box from "./Box";
import BoxLegend from "./Legend";
import BoxButtons from "./Buttons";

class BoxModel extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    border: "p-1",
    margin: "m-4",
    padding: "p-4",
    text: ""
  };

  componentDidMount() {
    this.setState({
      border: "p-1",
      margin: "m-4",
      padding: "p-4",
      text: ["border: 0.4em solid #FFD500", "margin: 1.5rem", "padding: 1.5rem"]
    });
  }

  // componentDidUpdate(prevProps) {
  //   // if (this.props.userID !== prevProps.userID) {
  //   //   this.fetchData(this.props.userID);
  //   // }
  // }

  handleReset = () => {
    this.setState({
      border: "p-1",
      margin: "m-4",
      padding: "p-4",
      text: ["border: 0.4em solid #FFD500", "margin: 1.5rem", "padding: 1.5rem"]
    });
  };

  handleClick = stateVal => {
    console.log(stateVal);
    this.setState(stateVal);
    console.log(this.state);
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <div className="container">
          <h2>CSS Box Model</h2>
        </div>

        <Explanation />
        <div className="container">
          <h3>Interactive CSS Box Model</h3>
          <div className="row">
            <div className="col-12 col-lg-5">
              <BoxButtons style={this.state} handler={this.handleClick} />
            </div>
            <div className="col-12 col-lg-7">
              <div className="card">
                <div className="card-header">
                  <BoxLegend />
                </div>
                <div className="card-body d-flex align-items-center justify-content-center">
                  <Box
                    id="variable"
                    margin={this.state.margin}
                    padding={this.state.padding}
                    border={this.state.border}
                  />
                  <Box margin="m-4" padding="p-4" border="p-1" />
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <code>
                    {this.state.text[0]}; <br />
                    {this.state.text[1]}; <br />
                    {this.state.text[2]};
                  </code>
                </div>
              </div>
              {/* End Card */}
              <button
                type="button"
                onClick={this.handleReset}
                className={`btn btn-secondary btn-block my-4`}
              >
                Reset Box Model
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxModel;
