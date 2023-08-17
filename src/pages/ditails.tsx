import React from "react";

const Ditails = () => {
  return (
    <section>
      <div className="product-ditails">
        <div className="product-card">
          <img
            src={require("../assets/logo/ASL.webp")}
            alt=""
            className="product-image"
          />

          <div className="thumbnails">
            <img src={require("../assets/logo/ASL.webp")} alt="" />
            <img src={require("../assets/logo/ASL.webp")} alt="" />
            <img src={require("../assets/logo/ASL.webp")} alt="" />
            <img src={require("../assets/logo/ASL.webp")} alt="" />
          </div>
        </div>
        <div className="product-desc">
          <h1>Product title</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            facilis ratione hic aut, incidunt reprehenderit temporibus,
            distinctio tenetur quas totam accusantium voluptatem recusandae.
            Veritatis magnam praesentium aut error maiores fugiat?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ditails;
