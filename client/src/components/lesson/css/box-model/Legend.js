import React from "react";

function BoxLegend() {
  return (
    <div className="row">
      <div className="col-6 col-md-3">
        <span className="margin-box badge px-2 col-1">&nbsp;</span> Margin
      </div>
      <div className="col-6 col-md-3">
        <span className="border-box badge px-2 col-1">&nbsp;</span> Border
      </div>
      <div className="col-6 col-md-3">
        <span className="padding-box badge px-2 col-1">&nbsp;</span> Padding
      </div>
      <div className="col-6 col-md-3">
        <span className="content-box badge px-2 col-1">&nbsp;</span> Content
      </div>
    </div>
  );
}

export default BoxLegend;
