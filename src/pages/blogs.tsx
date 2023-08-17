import React from "react";

const Blogs = () => {
  return (
    <section id="blogs">
      <div className="blogs-cnt">
        <span>
          <h1 className="blogs-title">Blogs</h1>
          <div className="toolbar">
            <ul>
              <li>
                <p>All</p>
              </li>
              <li>
                <p>latest</p>
              </li>
              <li>
                <p>Sort</p>
              </li>
              <li>
                <div className="searchbar">
                  <input type="text" name="search" />
                  <i>srch</i>
                </div>
              </li>
            </ul>
          </div>
        </span>
        <div className="blogs-list">
          {[1, 2, 4, 5, 6, 7, 8, 8].map(() => (
            <div className="item">
              <img src={require("../assets/logo/ASL.webp")} alt="" />
              <div className="item-body">
                <h1>Blog title</h1>
                <h2>creation time</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                  ex quo maiores minima earum optio, quos ipsam eveniet
                  nesciunt, ratione debitis incidunt velit voluptatibus ad
                  reprehenderit veritatis, eos tenetur ut.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
