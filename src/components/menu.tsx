import React from "react";
import { NavLink } from "react-router-dom";
import { Content } from "./intex";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-title">
        <ul>
          <li>
            <NavLink to={"/"}>
              <p>Topic 1</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <p>Topic 2</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <p>Topic 3</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <p>Topic 4</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <Content />
    </div>
  );
};

export default Menu;
