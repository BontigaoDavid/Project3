import React from "react";

function Websites(props) {
  let responses = [];
  if (props.website) {
    console.log(props.website);
    responses.push(
      <p>
        <a href={props.website}>Website - Jtsai972.space</a>
      </p>
    );
  }

  if (props.github) {
    console.log(props.github);
    responses.push(
      <p>
        <a href={"https://github.com/" + props.github}>
          Github - {props.github}
        </a>
      </p>
    );
  }

  if (props.linkedin) {
    console.log(props.linkedin);
    responses.push(
      <p>
        <a href={"https://www.linkedin.com/in/" + props.linkedin}>
          LinkedIn - {props.linkedin}
        </a>
      </p>
    );
  }

  if (props.portfolio) {
    console.log(props.portfolio);
    responses.push(
      <p>
        <a href={props.portfolio}>
          Portfolio - {props.portfolio}
        </a>
      </p>
    );
  }

  if(props.codepen) {
    if (props.codepen) {
    console.log(props.codepen);
    responses.push(
      <p>
        <a href={props.codepen}>
          Codepen - {props.codepen}
        </a>
      </p>
    );
  }
  }

  return responses;
}

export default Websites;