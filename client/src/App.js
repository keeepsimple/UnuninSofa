import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLayout from "./components/Layout/AdminLayout";
import UserLayout from "./components/Layout/UserLayout";
import NoMatch from "./components/NoMatch/NoMatch";
import CategoryAdmin from "./features/CategoryAdmin";
import CreateCategory from "./features/CategoryAdmin/Create";
import EditCategory from "./features/CategoryAdmin/Edit";
import Login from "./features/Login";
import Register from "./features/Register";
import SubCategoryFeature from "./features/SubCategory/index";
import SubCategoryAdmin from "./features/SubCategoryAdmin";
import CreateSubCategory from "./features/SubCategoryAdmin/Create";
import EditSubCategory from "./features/SubCategoryAdmin/Edit";
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
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route element={<AdminLayout allowedRole={admin} />}>
          <Route path="/admin/dashboard" element={<DashBoardMain />} />
          <Route path="/admin/category" element={<CategoryAdmin />} />
          <Route
            path="/admin/category/edit/:cateId"
            element={<EditCategory />}
          />
          <Route path="/admin/category/create" element={<CreateCategory />} />
          <Route path="/admin/subcategory" element={<SubCategoryAdmin />} />
          <Route path="/admin/subcategory/create" element={<CreateSubCategory />} />
          <Route path="/admin/subcategory/edit/:id" element={<EditSubCategory />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
