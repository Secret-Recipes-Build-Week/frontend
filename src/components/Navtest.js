import React from "react";
import { Link } from "react-router-dom";

export default function Navtest() {
  return (
    <React.Fragment>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/dash">Dash</Link>
      </nav>
    </React.Fragment>
  );
}
