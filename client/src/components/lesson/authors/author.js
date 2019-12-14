import React from "react";

function Author(props) {
  let authorLc = (props.author).toString().toLowerCase();
  let description;
  // console.log(props);
  // console.log(authorLc);

  switch(authorLc) {
    case "jasmine":
      description = "Jasmine is a recent graduate of SMU Coding Bootcamp. She is passionate about learning.";
      break;
    default: 
      break;
  }

  return (
    <div className={props.bg + " mt-4"}>
      <div className="container py-4">
        <p className="text-center h4">This lesson was brought to you by: </p>
        <div className="row">
          <div className="col-lg-2 d-none d-lg-block"></div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 inline-flex justify-content-center align-items-center">
            <img className="img-fluid img-thumbnail d-block rounded-circle w-50 mx-auto" src={require("./images/square-" + authorLc + ".png")} alt={props.author} />
          </div>
          <div className="col-12 col-sm-6 col-md-8 col-lg-5 inline-flex justify-content-center align-items-center">
            <p className="h4">{props.author}</p>
            <p>{description}</p>
          </div>
          <div className="col-lg-2 d-none d-lg-block"></div>
        </div>
      </div>
    </div>
  );
};

export default Author;