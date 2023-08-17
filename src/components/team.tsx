import React from "react";

const Team = () => {
  return (
    <section id="team">
      <div className="team-title">
        <h1>Our Staf members</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero iusto
          reiciendis aliquid velit enim officia magnam voluptatem, debitis
          labore cum vitae maiores vero dicta eligendi. Excepturi molestias
          consequuntur ipsum eligendi.
        </p>
      </div>
      <div className="team-members">
        <div className="member">
          <img src={require("../assets/team/fotsoRichard.png")} alt="" />
          <h1>Richard Fotso</h1>
          <h2>Directeur General</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit, consectetur. Eius rerum nihil corrupti?
          </p>
        </div>

        <div className="member">
          <img src={require("../assets/team/ClementZafack.png")} alt="" />
          <h1>Clement Zafack</h1>
          <h2>Directeur Financier (CFO)</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit, consectetur. Eius rerum nihil corrupti?
          </p>
        </div>

        <div className="member">
          <img src={require("../assets/team/mireilZebaze.png")} alt="" />
          <h1>Mireil Zebaze</h1>
          <h2>Administrative Director general</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit, consectetur. Eius rerum nihil corrupti?
          </p>
        </div>

        <div className="member">
          <img src={require("../assets/team/Obama Rodrigue.png")} alt="" />
          <h1>Obama Rodrigue</h1>
          <h2>Administrative Director general</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit, consectetur. Eius rerum nihil corrupti?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
