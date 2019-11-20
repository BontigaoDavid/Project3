import React from "react";

function Website(props) {
  let responses = []
  if(props.website) {
    console.log(props.website);
    responses.push(<p><a href={props.website}>Website - Jtsai972.space</a></p>);
  }

  if(props.github) {
    console.log(props.website);
    responses.push(<p><a href={"https://github.com/" + props.github}>Github - {props.github}</a></p>);
  }

  if(props.linkedin) {
    console.log(props.website);
    responses.push(<p><a href={"https://www.linkedin.com/in/" + props.linkedin}>LinkedIn - {props.linkedin}</a></p>);
  }

  return responses;
}

function Team(props) {
  console.log(props);

  return (
    <div className="col-12 col-sm-4 col-xl-3">
      <div className="card">
        <img
          className="card-img-top"
          src={props.src}
          alt={props.name}
        />
        <div className="card-body">
          <h4 className="h5 card-title">{props.name}</h4>
          <Website website={props.website} github={props.github} linkedin={props.linkedin} />
        </div>
      </div>
    </div>
  );
}

export default Team;
