import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "../Headers";
import StorageKeys from "../../configs/storageKey";

function UserLoginLayout({ cartItem }) {
  const location = useLocation();
  const isLogin = localStorage.getItem(StorageKeys.TOKEN) ? true : false;
  return isLogin ? (
    <div>
      <Header cartItem={cartItem} />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default UserLoginLayout;
