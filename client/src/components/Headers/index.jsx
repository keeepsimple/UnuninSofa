import React from "react";
import "./style.css";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";

function Header({ cartItem }) {
  return (
    <>
      <Head />
      <Search cartItem={cartItem} />
      <Navbar />
    </>
  );
}

export default Header;
