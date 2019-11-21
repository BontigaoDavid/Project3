import React from "react";
import "./style.css";

function Box() {
  return(
    <div className="margin-box p-5">
      {/* Margin */}
      <div className="border-box">
        {/* Border */}
        <div className="padding-box p-5">
          {/* Padding */}
          <div className="content-box">Content</div>
        </div>
      </div>
    </div>
  )
}

export default Box;