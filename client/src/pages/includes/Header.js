import React from "react";

function Header () {
  return (
    <header className="py-3 header">
      <div className="container">
        <h1 id = "title" className="lead mb-0" style={{fontSize: "3em"}}>Simply Conceptual</h1>
        <p id="subtitle" className="lead mb-0" style={{fontSize: "2em"}}>Back to the Basics with Web Development</p>
      </div>
    </header>
  );
}

export default Header;