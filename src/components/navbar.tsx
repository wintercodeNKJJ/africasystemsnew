import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/ASL.png";

interface Props {
  setVisible: (() => void) | undefined;
}

const Navbar = ({ setVisible }: Props) => {
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
          <li onClick={() => (setVisible ? setVisible() : "")}>
            <p>Menu</p>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <p>Contact</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blogs"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <p>Blog</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
