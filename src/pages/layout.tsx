import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, Ditails, Topic } from "./index";
import { Menu, Navbar } from "../components/intex";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/ditails" element={<Ditails />} />
      </Routes>
    </div>
  );
};

export default Layout;
