import React from "react";
import Box from "./Box";
import BoxLegend from "./BoxLegend";

function BoxModel() {
  return (
    <div className="row">
      <div className="col-12 col-md-3 col-lg-5"></div>
      <div className="col-12 col-md-9 col-lg-7">
        <div className="card">
          <div className="card-header d-flex justify-content-center">
            <BoxLegend />
          </div>
          <div className="card-body d-flex justify-content-center">
            <Box />
            <Box />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxModel;
