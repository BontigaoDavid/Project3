import React from "react";

class BoxButtons extends React.Component {
  // state = {
  //   isClicked: false
  // }

  // addclass = (val) => {
  //   this.setState(prevState => ({ isClicked: !prevState.isClicked }));
  //   console.log(val);
  // }

  state = {
    margin: this.props.style.margin,
    padding: this.props.style.padding,
    border: this.props.style.border,
    text: this.props.style.text
  };

  reply_click = (clicked_id, clicked_text) => {
    // console.log(clicked_id.slice(2));
    // console.log(clicked_id)
    switch (clicked_id[0]) {
      case "r":
        this.props.handler({
          border: "p-1",
          margin: "m-4",
          padding: "p-4",
          text: [
            "border: 0.4em solid #FFD500",
            "margin: 1.5rem",
            "padding: 1.5rem"
          ]
        });
        break;
      case "m":
        if (this.props.style.margin !== clicked_id.slice(2)) {
          this.props.handler({
            margin: clicked_id.slice(2),
            text: [
              this.props.style.text[0],
              "margin" + clicked_text,
              this.props.style.text[2]
            ]
          });
        } else {
          this.props.handler({
            margin: "",
            text: [
              this.props.style.text[0],
              "margin: none",
              this.props.style.text[2]
            ]
          });
        }

        // console.log(this.state.margin);
        // console.log(this.props.handler({margin: clicked_id}));
        break;
      case "b":
        if (this.props.style.border !== clicked_id.slice(2)) {
          this.props.handler({
            border: clicked_id.slice(2),
            text: [
              "border" + clicked_text,
              this.props.style.text[1],
              this.props.style.text[2]
            ]
          });
        } else {
          this.props.handler({
            border: "",
            text: [
              "border: none",
              this.props.style.text[1],
              this.props.style.text[2]
            ]
          });
        }
        break;
      case "p":
        if (this.props.style.padding !== clicked_id.slice(2)) {
          this.props.handler({
            padding: clicked_id.slice(2),
            text: [
              this.props.style.text[0],
              "padding" + clicked_text,
              this.props.style.text[2]
            ]
          });
        } else {
          this.props.handler({
            padding: "",
            text: [
              this.props.style.text[0],
              "padding: 0",
              this.props.style.text[2]
            ]
          });
        }
        break;
      default:
        break;
    }
  };

  handleClick = e =>
    this.reply_click(
      e.target.getAttribute("addclass"),
      e.target.getAttribute("text")
    );

  render(props) {
    // const {isClicked} = this.state;
    // console.log(props);

    return (
      <div>
        {/* <button
          type="button"
          addclass="reset"
          text=""
          onClick={this.handleClick}
          className={`btn btn-secondary btn-block mb-3`}
        >
          Reset
        </button> */}
        <div className="card mb-2">
          <div className="card-header p-2">Margins</div>
          <div className="card-body p-2">
            <p className="mb-2">Toggling Multiple Margins</p>
            <div
              className="btn-group"
              role="group"
              aria-label="Multiple Margins"
            >
              <button
                type="button"
                addclass="m-m-4"
                text=": 1.5rem"
                onClick={this.handleClick}
                className={`btn btn-secondary border-left`}
              >
                All
              </button>
              <button
                type="button"
                addclass="m-mx-4"
                text=": 0 1.5rem"
                onClick={this.handleClick}
                className="btn btn-secondary border-left"
              >
                X-axis
              </button>
              <button
                addclass="m-my-4"
                type="button"
                text=": 1.5rem 0"
                onClick={this.handleClick}
                className="btn btn-secondary border-left"
              >
                Y-axis
              </button>
            </div>
            <p className="mb-2 mt-3">Toggling Individual Margins</p>
            <div
              className="btn-group"
              role="group"
              aria-label="Individual Margins"
            >
              <button
                addclass="m-mt-4"
                onClick={this.handleClick}
                text="-top: 1.5rem"
                type="button"
                className="btn btn-secondary border-left"
              >
                Top
              </button>
              <button
                addclass="m-mr-4"
                onClick={this.handleClick}
                type="button"
                text="-right: 1.5rem"
                className="btn btn-secondary border-left"
              >
                Right
              </button>
              <button
                addclass="m-mb-4"
                onClick={this.handleClick}
                text="-bottom: 1.5rem"
                type="button"
                className="btn btn-secondary border-left"
              >
                Bottom
              </button>
              <button
                addclass="m-ml-4"
                onClick={this.handleClick}
                text="-left: 1.5rem"
                type="button"
                className="btn btn-secondary border-left"
              >
                Left
              </button>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-header p-2">Borders</div>
          <div className="card-body p-2">
            <p className="mb-2">Toggling Borders</p>
            <div className="btn-group" role="group" aria-label="Borders">
              <button
                type="button"
                addclass="b-p-1"
                text=": 0.25rem solid #FFD500"
                onClick={this.handleClick}
                className="btn btn-secondary border-left"
              >
                All
              </button>
              <button
                type="button"
                addclass="b-pt-1"
                text="-top: 0.25rem solid #FFD500"
                onClick={this.handleClick}
                className="btn btn-secondary border-left"
              >
                Top
              </button>
              <button
                type="button"
                addclass="b-pr-1"
                text="-right: 0.25rem solid #FFD500"
                onClick={this.handleClick}
                className="btn btn-secondary border-left"
              >
                Right
              </button>
              <button
                type="button"
                addclass="b-pb-1"
                text="-bottom: 0.25rem solid #FFD500"
                onClick={this.handleClick}
                className="btn btn-secondary border-left"
              >
                Bottom
              </button>
              <button
                type="button"
                addclass="b-pl-1"
                text="-left: 0.25rem solid #FFD500"
                onClick={this.handleClick}
                className="btn btn-secondary border-left"
              >
                Left
              </button>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-header p-2">Toggle Padding</div>
          <div className="card-body p-2">
            <p className="mb-2">Toggling Multiple Padding</p>
            <div
              className="btn-group"
              role="group"
              aria-label="Multiple Padding"
            >
              <button
                type="button"
                addclass="p-p-4"
                text=": 1.5rem"
                onClick={this.handleClick}
                className={`btn btn-secondary border-left`}
              >
                {/* ${isClicked? "m-3" : ""} */}
                All
              </button>
              <button
                type="button"
                addclass="p-px-4"
                text=": 0 1.5rem"
                onClick={this.handleClick}
                className="btn btn-secondary border-left"
              >
                X-axis
              </button>
              <button
                addclass="p-py-4"
                type="button"
                text=": 1.5rem 0"
                onClick={this.handleClick}
                className="btn btn-secondary border-left"
              >
                Y-axis
              </button>
            </div>
            <p className="mb-2 mt-3">Toggling Individual Padding</p>
            <div className="btn-group" role="group" aria-label="Padding">
              <button
                addclass="p-pt-4"
                text="-top: 1.5rem"
                onClick={this.handleClick}
                type="button"
                className="btn btn-secondary border-left"
              >
                Top
              </button>
              <button
                addclass="p-pr-4"
                text="-right: 1.5rem"
                onClick={this.handleClick}
                type="button"
                className="btn btn-secondary border-left"
              >
                Right
              </button>
              <button
                addclass="p-pb-4"
                text="-bottom: 1.5rem"
                onClick={this.handleClick}
                type="button"
                className="btn btn-secondary border-left"
              >
                Bottom
              </button>
              <button
                addclass="p-pl-4"
                text="-left: 1.5rem"
                onClick={this.handleClick}
                type="button"
                className="btn btn-secondary border-left"
              >
                Left
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxButtons;
