import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsClockHistory,
} from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer>
      <div className="side">
        <div className="side-title">
          <img src={require("../assets/ASL.png")} alt="" />
          <h1>Africa Systems</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          labore tempore laudantium, magnam fugiat quia, provident consequatur
          veniam eaque voluptas numquam? Cum minima quis eligendi non, placeat
          nobis mollitia at.
        </p>
      </div>
      <div className="center-tems">
        <div className="info-item">
          <div>
            <i>
              <MdLocationOn size={18} />
            </i>
            <h1>Address</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="info-item">
          <div>
            <i>
              <HiPhone size={18} />
            </i>
            <h1>Phone</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="info-item">
          <div>
            <i>
              <BsClockHistory size={18} />
            </i>
            <h1>Open hours</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="social-links">
        <div className="">
          <h1>Subscrib to our news letter</h1>
          <form action="/">
            <input type="email" name="email" id="email" />
            <button type="submit">Subscrib</button>
          </form>
        </div>
        <div className="social">
          <i>
            <BsFacebook size={18} />
          </i>
          <i>
            <BsLinkedin size={18} />
          </i>
          <i>
            <BsTwitter size={18} />
          </i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
