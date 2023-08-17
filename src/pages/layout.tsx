import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, Ditails, Blogs } from "./index";
import { Footer, Menu, Navbar, Partners } from "../components/intex";
import { useMyContex } from "../context/context";

const Layout = () => {
  const value = useMyContex();

  return (
    <div className="layout">
      <Navbar setVisible={value?.menuVisibility} />
      <Menu visible={value?.showMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ditails" element={<Ditails />} />
      </Routes>
      <Partners />
      <Footer />
    </div>
  );
};

export default Layout;
