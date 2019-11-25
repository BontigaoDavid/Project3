import React from "react";

class BoxButtons extends React.Component {
  // state = {
  //   isClicked: false
  // }

  // addClass = (val) => {
  //   this.setState(prevState => ({ isClicked: !prevState.isClicked }));
  //   console.log(val);
  // }

  state = {
    margin: this.props.style.margin,
    padding: this.props.style.padding,
    border: this.props.style.border
  };

  reply_click = clicked_id => {
    // console.log(clicked_id)
    switch (clicked_id[0]) {
      case "m":
        this.props.handler({
          margin: clicked_id,
          padding: this.props.style.padding,
          border: this.props.style.border
        });
        // console.log(this.state.margin);
        // console.log(this.props.handler({margin: clicked_id}));
        break;
      case "b":
        break;
      case "p":
        break;
      default:
        break;
    }
  };

  handleClick = e => this.reply_click(e.target.id);

  render(props) {
    // const {isClicked} = this.state;
    // console.log(props);

    return (
      <div>
        <h3>Margin Toggles</h3>
        <h4>Multiple Margins</h4>
        <div className="btn-group" role="group" aria-label="Multiple Margins">
          <button
            type="button"
            id="m-4"
            onClick={this.handleClick}
            className={`btn btn-secondary tgl-m border-left`}
          >
            {/* ${isClicked? "m-3" : ""} */}
            All
          </button>
          <button
            type="button"
            id="mx-4"
            className="btn btn-secondary tgl-mx border-left"
          >
            X-axis
          </button>
          <button
            id="my-4"
            type="button"
            className="btn btn-secondary tgl-my border-left"
          >
            Y-axis
          </button>
          <button
            type="button"
            id="m-0"
            onClick={this.handleClick}
            className="btn btn-secondary tgl-my border-left"
          >
            Margin-none
          </button>
        </div>
        <h4>Individual Margins</h4>
        <div className="btn-group" role="group" aria-label="Individual Margins">
          <button
            type="button"
            className="btn btn-secondary tgl-mt border-left"
          >
            margin-top
          </button>
          <button
            type="button"
            className="btn btn-secondary tgl-mr border-left"
          >
            margin-right
          </button>
          <button
            type="button"
            className="btn btn-secondary tgl-mb border-left"
          >
            margin-bottom
          </button>
          <button type="button" className="btn btn-secondary tgl-l border-left">
            margin-left
          </button>
        </div>
        <h3>Borders</h3>
        <div className="btn-group" role="group" aria-label="Borders">
          <button type="button" className="btn btn-secondary border-left">
            Left
          </button>
          <button type="button" className="btn btn-secondary border-left">
            Middle
          </button>
          <button type="button" className="btn btn-secondary border-left">
            Right
          </button>
          <button type="button" className="btn btn-secondary border-left">
            Right
          </button>
        </div>
        <h3>Padding</h3>
        <div className="btn-group" role="group" aria-label="Padding">
          <button type="button" className="btn btn-secondary border-left">
            Left
          </button>
          <button type="button" className="btn btn-secondary border-left">
            Middle
          </button>
          <button type="button" className="btn btn-secondary border-left">
            Right
          </button>
          <button type="button" className="btn btn-secondary border-left">
            Right
          </button>
        </div>
      </div>
    );
  }
}

export default BoxButtons;
