import React from "react";

function Team(props) {
  console.log("PROPS: " + props.name);

  return (
    <div className="col-12 col-sm-4">
      <div className="card d-lg-none">
        <img
          className="card-img-top"
          src={props.src}
          alt={props.name}
        />
        <div className="card-body">
          <h4 className="h5 card-title">{props.name}</h4>
        </div>
      </div>
    </div>
  );
}

export default Team;
