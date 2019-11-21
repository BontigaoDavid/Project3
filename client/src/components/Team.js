import React from "react";
import Websites from "./About/Websites"

function Team(props) {
  console.log(props);

  return (
    <div className="col-12 col-sm-4 col-xl-3">
      <div className="card">
        <img className="card-img-top" src={props.src} alt={props.name} />
        <div className="card-body">
          <h4 className="h5 card-title">{props.name}</h4>
          <Websites
            website={props.website}
            github={props.github}
            linkedin={props.linkedin}
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
