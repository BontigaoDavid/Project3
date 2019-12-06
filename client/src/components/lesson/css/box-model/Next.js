import React from "react";

function Next() {
  let handleNextLesson = () => {
    console.log("I have been clicked to go to the next lesson and get a badge");
    window.location = "/lesson/es6/variables";
  };

  return (
    <button className="btn btn-block" onClick={handleNextLesson}>
      Next Lesson
    </button>
  );
}

export default Next;
