import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NavbarItems from "../components/Navbar/NavbarItems/NavbarItems";


const Layout = (props) => {
  return (
    <>
      <Navbar>
        <NavbarItems title="Blog" />
        <NavbarItems title="Links">
          <p>HelloWorld!</p>
        </NavbarItems>
      </Navbar>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
