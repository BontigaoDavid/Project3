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
            <i class="fas fa-globe"> </i> 
            <strong>Website: </strong><br />
            <a href={props.website}>{props.website} </a>
          </p>
        );
        break;
      case "github":
        responses.push(
          <p>
            <i class="fab fa-github"> </i> 
            <strong>Github: </strong><br />
            <a href={"https://github.com/" + props.github}>{props.github}</a>
          </p>
        );
        break;
      case "linkedin":
        responses.push(
          <p>
            <i class="fab fa-linkedin-square"> </i> <strong>LinkedIn: </strong><br />
            <a href={"https://www.linkedin.com/in/" + props.linkedin}>
              {props.linkedin}
            </a>
          </p>
        );
        break;
      case "portfolio":
        responses.push(
          <p>
            <i class="fas fa-code"> </i>
            <strong>Portfolio: </strong><br />
            <a href={props.portfolio}>{props.portfolio}</a>
          </p>
        );
        break;
      case "codepen":
        responses.push(
          <p>
            <i class="fab fa-codepen"> </i>
            <strong>Codepen: </strong><br />
            <a href={props.codepen}>{props.codepen}</a>
          </p>
        );
        break;
      default:
        break;
    }
  });

  // if (props.website) {
  //   console.log(props.website);
  //   responses.push(
  //     <p>
  //       <a href={props.website}>Website - {props.website}</a>
  //     </p>
  //   );
  // }

  // if (props.github) {
  //   console.log(props.github);
  //   responses.push(
  //     <p>
  //       <a href={"https://github.com/" + props.github}>
  //         Github - {props.github}
  //       </a>
  //     </p>
  //   );
  // }

  // if (props.linkedin) {
  //   console.log(props.linkedin);
  //   responses.push(
  //     <p>
  //       <a href={"https://www.linkedin.com/in/" + props.linkedin}>
  //         LinkedIn - {props.linkedin}
  //       </a>
  //     </p>
  //   );
  // }

  // if (props.portfolio) {
  //   console.log(props.portfolio);
  //   responses.push(
  //     <p>
  //       <a href={props.portfolio}>Portfolio - {props.portfolio}</a>
  //     </p>
  //   );
  // }

  // if (props.codepen) {
  //   if (props.codepen) {
  //     console.log(props.codepen);
  //     responses.push(
  //       <p>
  //         <a href={props.codepen}>Codepen - {props.codepen}</a>
  //       </p>
  //     );
  //   }
  // }

  return responses;
}

export default Websites;
