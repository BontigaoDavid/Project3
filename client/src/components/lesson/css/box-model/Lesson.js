import React from "react";
import Box from "./Box";
import BoxLegend from "./Legend";
import BoxButtons from "./Buttons";

class BoxModel extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }
  state = {
    margin: "m-4",
    border: "",
    padding: "p-4"
  }

  componentDidMount() {
    this.setState({
      margin: "m-4",
      border: "",
      padding: "p-4"
    })
  }

  componentDidUpdate(prevProps) {
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
  }

  handleClick = (stateVal) => {
    console.log(stateVal);
    this.setState(stateVal);
    console.log(this.state);
}

  render () {
    // console.log(this.state);
    return (
      <div className="row">
        <div className="col-12 col-md-5 col-lg-6">
          <BoxButtons style={this.state} handler={this.handleClick} />
        </div>
        <div className="col-12 col-md-7 col-lg-6">
          <div className="card">
            <div className="card-header d-flex justify-content-center">
              <BoxLegend />
            </div>
            <div className="card-body d-flex align-items-center justify-content-center">
              <Box id="variable" margin={this.state.margin} padding={this.state.padding} />
              <Box margin="m-4" padding="p-4"  />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxModel;
