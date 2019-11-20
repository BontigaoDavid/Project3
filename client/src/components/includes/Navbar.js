import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-secondary text-right">
      <div className="container">
        <a className="navbar-brand" href="/">
          Navbar w/ text
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/lesson"
                className={
                  window.location.pathname === "/lesson"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Lesson Page
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/user"
                className={
                  window.location.pathname === "/user"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Profile Page
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About Page
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
