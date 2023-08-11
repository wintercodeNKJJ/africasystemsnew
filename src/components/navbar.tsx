import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/ASL.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <NavLink to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
        <h1>Africa Systems</h1>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <NavLink to={"/Topic"}>
              <p>Menu</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Contact"}>
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
