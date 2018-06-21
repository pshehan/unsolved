import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>

  <nav className="navbar navbar-expand-lg navbar-secondary bg-light" style={{position: 'fixed', width: '100%'}}>
    <ul className="navbar-nav" style={{float: 'right'}}>
      <li className="nav-item">
        <Link to="/"><button type="button" className="btn btn-danger">Home</button></Link>
      </li>
      <li className="nav-item">
        <Link to="/savedArticles"><button type="button" className="btn btn-danger">Saved</button></Link>
      </li>
    </ul>
</nav>;

export default Nav;
