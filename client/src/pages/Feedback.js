import React from "react";

function Lesson({ match }) {
  console.log(match);

  return (
    <div className="container">
      <h2>Feedback</h2>
      <p>Did you have trouble with a lesson? Did you think a lesson was explained really well? Caught an inaccuracy or a bug?</p>
      <p>Got any feedback for us? We'd love to hear from you!</p>
      <div className="row mt-3 p-3 bg-gray">
        <div className="col-12 col-md-6 col-lg-5 col-xl-4 d-inline-flex align-items-center">
          <p className="h4 mb-2 mb-md-0">Caught an error?</p>
        </div>
        <div className="d-none d-lg-block col-lg-2 col-xl-4"></div>
        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
        <a className="btn" href="https://www.surveymonkey.com/r/TPWTPW3">SurveyMonkey: Error Report</a>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-12 col-md-6 col-lg-5 col-xl-4 d-inline-flex align-items-center">
          <p className="h4 mb-2 mb-md-0">How did we do?</p>
        </div>
        <div className="d-none d-lg-block col-lg-2 col-xl-4"></div>
        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
          <a className="btn" href="https://www.surveymonkey.com/r/TRCHNCJ">SurveyMonkey: Lesson Feedback</a>
        </div>
      </div>
      <div className="row p-3 bg-gray">
        <div className="col-12 col-md-6 col-lg-5 col-xl-4 d-inline-flex align-items-center">
          <p className="h4 mb-2 mb-md-0">Want to see a new lesson?</p>
        </div>
        <div className="d-none d-lg-block col-lg-2 col-xl-4"></div>
        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
        <a className="btn" href="https://www.surveymonkey.com/r/TBJYWVC">SurveyMonkey: Request a Lesson</a>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
