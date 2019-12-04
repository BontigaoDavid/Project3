import React from "react";

function Header () {
  return (
    <header className="py-3 header">
      <div className="container">
        <h1 id = "title" className="lead mb-0" style={{fontSize: "3em", fontWeight: "500"}}>Simply Conceptual</h1>
        <p id="subtitle" className="lead mb-0" style={{fontSize: "1.75em"}}>Back to the Basics with Web Development</p>
      </div>
    </header>
  );
}

export default Header;