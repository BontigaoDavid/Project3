import React from "react";

function Badge() {
  return (
    <div className="col-4 col-md-3 col-lg-2 mt-3 text-center">
      <img className="img-thumbnail img-fluid rounded-circle" src="https://source.unsplash.com/random/64x64" alt="badge" />
      <p className="h5">Badge Title</p>
    </div>
  );
}

export default Badge;
