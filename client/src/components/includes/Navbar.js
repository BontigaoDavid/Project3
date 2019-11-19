import React from "./node_modules/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav py-3">
      <ul className="container">
        <li className="nav-item">
          <Link to="/" className={ window.location.pathname === "/" ? "nav-link active" : "nav-link" }>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
