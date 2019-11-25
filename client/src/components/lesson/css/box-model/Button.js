import React from "react";

function BoxButton(props) {
  console.log(props)
  return (
    <button
      type="button"
      className={`btn btn-secondary`}
    >
      {props.text}
    </button>
  );
}

export default BoxButton;
