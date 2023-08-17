import React from "react";
import placeholder from "../assets/logo/ASL.webp";
import { NavLink } from "react-router-dom";

const Content = () => {
  const note: string =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet dolorum assumenda laboriosam.";

  return (
    <div className="contet">
      <NavLink to="/ditails">
        <div className="item">
          <img src={placeholder} alt="" />
          <p>{note.substring(0, 60)}</p>
        </div>
      </NavLink>
      <div className="item">
        <img src={placeholder} alt="" />
        <p>{note.substring(0, 60)}</p>
      </div>
      <div className="item">
        <img src={placeholder} alt="" />
        <p>{note.substring(0, 60)}</p>
      </div>
      <div className="item">
        <img src={placeholder} alt="" />
        <p>{note.substring(0, 60)}</p>
      </div>
      <div className="item">
        <img src={placeholder} alt="" />
        <p>{note.substring(0, 60)}</p>
      </div>
      <div className="item">
        <img src={placeholder} alt="" />
        <p>{note.substring(0, 60)}</p>
      </div>
      <div className="item">
        <img src={placeholder} alt="" />
        <p>{note.substring(0, 60)}</p>
      </div>
      <div className="item">
        <img src={placeholder} alt="" />
        <p>{note.substring(0, 60)}</p>
      </div>
      <div className="item">
        <img src={placeholder} alt="" />
        <p>{note.substring(0, 60)}</p>
      </div>
    </div>
  );
};

export default Content;
