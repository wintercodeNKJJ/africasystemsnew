import React from "react";
import { Team } from "../components/intex";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="home-page">
        <div className="header">
          <div className="note">
            <h1>Africasystems Software Solutions</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              doloremque explicabo officiis natus dolores cupiditate! Fuga
              facilis harum debitis culpa officia? Molestias fugiat deleniti
              voluptate soluta. Delectus architecto iure minus.
            </p>

            <NavLink to="/contact">
              <button>Contact Us</button>
            </NavLink>
          </div>
          <div className="imageview relative">
            <img
              src={require("../assets/ASL.png")}
              alt=""
              className="title-logo1"
            />
            <img
              src={require("../assets/ASL.png")}
              alt=""
              className="title-logo2"
            />
            <img
              src={require("../assets/ASL.png")}
              alt=""
              className="title-logo3"
            />
          </div>
        </div>
      </section>

      <section id="home-content">
        <div className="home-content">
          <div className="contenet-title">Our Services</div>
          <p className="content-note">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit alias
            deserunt vitae minima ipsam, fugiat, omnis libero sequi
            reprehenderit nihil provident soluta! Velit aliquid asperiores
            voluptas quo vel architecto ipsam.
          </p>
          <div className="main-items-list">
            {[1, 2, 3, 4].map(() => (
              <div className="main-item">
                <img src={require("../assets/logo/ASL.webp")} alt="" />
                <div className="i-text">
                  <h2>Lorem ipsum dolor sit amet.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quaerat, dolorum voluptatem consequatur, commodi,.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="home-logo">
        <div className="home-content">
          <div className="contenet-title">Our Latest Products</div>
          <p className="content-note">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit alias
            deserunt vitae minima ipsam, fugiat, omnis libero sequi
            reprehenderit nihil provident soluta! Velit aliquid asperiores
            voluptas quo vel architecto ipsam.
          </p>
          <div className="main-items-list">
            {[1, 2, 3, 4].map(() => (
              <NavLink to="ditails">
                <div className="main-item">
                  <img src={require("../assets/logo/ASL.webp")} alt="" />
                  <div className="i-text">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quaerat, dolorum voluptatem consequatur, commodi,.
                    </p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
      <Team />
    </>
  );
};

export default Home;
