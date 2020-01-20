import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}><img src='../../images/home.png' className="nav-bar"/> </Link>
    </div>
  );
};

export default NavBar;