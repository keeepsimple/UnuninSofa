import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "../Headers";
import StorageKeys from "../../configs/storageKey";
import { Footer } from "../Footer";

function UserLoginLayout({ cartItem }) {
  const location = useLocation();
  const isLogin = localStorage.getItem(StorageKeys.TOKEN) ? true : false;
  return isLogin ? (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default UserLoginLayout;
