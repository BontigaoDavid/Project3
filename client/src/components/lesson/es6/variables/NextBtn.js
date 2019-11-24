import React from "react";

function NextBtn(props) {
    return (
      <button {...props} className="btn btn-success btn-block mb-3">
        {props.children}
      </button>
    );
  }

  export default NextBtn;
  