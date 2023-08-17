import React from "react";

const About = () => {
  return (
    <>
      <section id="we-are">
        <div>
          <img src={require("../assets/ASL.png")} alt="" />
          <div className="notes">
            <h1>Who We are?</h1>
            <h2>IT Software company with over 15+ years of xp</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo exercitationem accusamus beatae voluptatem magni, ea eos
              deserunt delectus natus tempora repellendus enim illo, iusto
              quaerat fugit at ducimus, expedita molestiae.
            </p>
          </div>
        </div>
      </section>
      <section id="vission">
        <div>
          <h1>Our vission</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            cupiditate quod dignissimos architecto. Corporis voluptates dolorum
            aperiam molestiae tenetur nihil eos? Fugiat velit officia officiis
            placeat, voluptates magnam consequuntur nostrum?
          </p>
        </div>
      </section>
      <section id="mission">
        <div>
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            cupiditate quod dignissimos architecto. Corporis voluptates dolorum
            aperiam molestiae tenetur nihil eos? Fugiat velit officia officiis
            placeat, voluptates magnam consequuntur nostrum?
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
