import React from "react";

function Websites(props) {
  let responses = [];

  // console.log(props);
  // console.log(Object.keys(props.props));

  Object.keys(props).forEach(prop => {
    switch (prop) {
      case "website":
        responses.push(
          <p>
            <i className="fas fa-globe"> </i> 
            <strong>Website: </strong><br />
            <a href={props.website}>{props.website} </a>
          </p>
        );
        break;
      case "github":
        responses.push(
          <p>
            <i className="fab fa-github"> </i> 
            <strong>Github: </strong><br />
            <a href={"https://github.com/" + props.github}>{props.github}</a>
          </p>
        );
        break;
      case "linkedin":
        responses.push(
          <p>
            <i className="fab fa-linkedin-square"> </i> <strong>LinkedIn: </strong><br />
            <a href={"https://www.linkedin.com/in/" + props.linkedin}>
              {props.linkedin}
            </a>
          </p>
        );
        break;
      case "portfolio":
        responses.push(
          <p>
            <i className="fas fa-code"> </i>
            <strong>Portfolio: </strong><br />
            <a href={props.portfolio}>{props.portfolio}</a>
          </p>
        );
        break;
      case "codepen":
        responses.push(
          <p>
            <i className="fab fa-codepen"> </i>
            <strong>Codepen: </strong><br />
            <a href={props.codepen}>{props.codepen}</a>
          </p>
        );
        break;
      default:
        break;
    }
  });
  return responses;
}

export default Websites;
