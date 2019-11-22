import React from "react";
import "./style.css";

function Box() {
  return(
    <div className="margin-box">
      {/* Margin */}
      <div className="border-box m-4">
        {/* Border */}
        <div className="padding-box p-4">
          {/* Padding */}
          <div className="content-box">Content</div>
        </div>
      </div>
    </div>
  )
}

export default Box;