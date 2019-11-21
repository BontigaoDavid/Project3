import React from "./node_modules/react";

function Websites(props) {
  let responses = [];
  props = props.props
  
  // console.log(props);
  // console.log(Object.keys(props.props));

  Object.keys(props).forEach(prop => {
    switch (prop) {
      case "website":
        responses.push(
          <p>
            <a href={props.website}>Website - {props.website}</a>
          </p>
        );
        break;
      case "github":
        responses.push(
          <p>
            <a href={"https://github.com/" + props.github}>
              Github - {props.github}
            </a>
          </p>
        );
        break;
      case "linkedin":
        responses.push(
          <p>
            <a href={"https://www.linkedin.com/in/" + props.linkedin}>
              LinkedIn - {props.linkedin}
            </a>
          </p>
        );
        break;
      case "portfolio":
        responses.push(
          <p>
            <a href={props.portfolio}>Portfolio - {props.portfolio}</a>
          </p>
        );
        break;
      case "codepen":
        responses.push(
          <p>
            <a href={props.codepen}>Codepen - {props.codepen}</a>
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
