import React from "react";
import "./style.css";

function Box(props) {
  return(
    <div className="margin-box">
      {/* Margin */}
      <div className={`border-box ${props.margin} ${props.border} border-0`}>
        {/* Border */}
        <div className={`padding-box ${props.padding}`}>
          {/* Padding */}
          <div className="content-box">Content</div>
        </div>
      </div>
    </div>
  )
}

export default Box;