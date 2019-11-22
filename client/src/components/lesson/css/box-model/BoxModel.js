import React from "react";
import Box from "./Box";
import BoxLegend from "./BoxLegend";
import BoxButtons from "./BoxButtons";

function BoxModel() {
  return (
    <div className="row">
      <div className="col-12 col-md-5 col-lg-6">
        <BoxButtons />
      </div>
      <div className="col-12 col-md-7 col-lg-6">
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
