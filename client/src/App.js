import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLayout from "./components/Layout/AdminLayout";
import UserLayout from "./components/Layout/UserLayout";
import NoMatch from "./components/NoMatch/NoMatch";
import CategoryAdmin from "./features/CategoryAdmin";
import Login from "./features/Login";
import Register from "./features/Register";
import SubCategoryFeature from "./features/SubCategory/index";
import DashBoardMain from "./pages/Dashboard";
import Home from "./pages/Home/Home";


function App() {
  const admin = "Admin";
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="subcategory/:subcateId"
            element={<SubCategoryFeature />}
          />
        </Route>
        <Route element={<AdminLayout allowedRole={admin} />}>
          <Route path="/admin/dashboard" element={<DashBoardMain />} />
          <Route path="/admin/category" element={<CategoryAdmin />} />
          <Route path="/admin/*" element={<NoMatch />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
