import React from "react";
import Box from "./Box";

function BoxModel() {
  return (
    <div>
      <ul className="legend list-group">
        <li className="list-group-item">
          <span className="margin-box badge px-2">&nbsp;</span> Margin
        </li>
        <li className="list-group-item">
          <span className="border-box badge px-2">&nbsp;</span> Border
        </li>
        <li className="list-group-item">
          <span className="padding-box badge px-2">&nbsp;</span> Padding
        </li>
        <li className="list-group-item">
          <span className="content-box badge px-2">&nbsp;</span> Content
        </li>
      </ul>
      <Box />
    </div>
  );
}

export default BoxModel;
