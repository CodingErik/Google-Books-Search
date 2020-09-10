import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Google Books
        </Link>
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Search
        </Link>
      <Link to="/saved" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Saved
        </Link>
    </nav>
  );
}

export default Nav;
