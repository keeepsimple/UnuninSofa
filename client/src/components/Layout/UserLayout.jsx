import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Headers";

function UserLayout({ cartItem }) {
  return (
    <div>
      <Header cartItem={cartItem} />
      <Outlet />
    </div>
  );
}

export default UserLayout;
