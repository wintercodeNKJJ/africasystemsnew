import React from "react";
import { NavLink } from "react-router-dom";
import { Content } from "./intex";

interface Props {
  visible: boolean | unknown;
}
const Menu = ({ visible }: Props) => {
  if (visible) {
    return (
      <div className="menu">
        <div className="menu-title">
          <ul>
            <li>
              <NavLink to={"/"}>
                <p>Products</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <p>Services</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <p>Research and Development</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <Content />
      </div>
    );
  } else {
    return <></>;
  }
};

export default Menu;
