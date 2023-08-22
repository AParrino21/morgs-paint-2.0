import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/happy-birthday">Cake Girls</Link>
      </div>
    </div>
  );
};

export default Nav;
