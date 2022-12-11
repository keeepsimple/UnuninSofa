import React from "react";
import "./style.css";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";

function Header(props) {
  return (
    <>
      <Head />
      <Search />
      <Navbar />
    </>
  );
}

export default Header;
