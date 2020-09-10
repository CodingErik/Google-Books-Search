import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Google Books
        </Link>
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Search
        </Link>
      <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
        Saved
        </Link>
    </nav>
  );
}

export default Nav;
