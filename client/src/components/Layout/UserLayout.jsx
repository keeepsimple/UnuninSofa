import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import Header from "../Headers";

function UserLayout({ cartItem }) {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserLayout;
