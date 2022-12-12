import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/Layout/UserLayout";
import Login from "./features/Login";
import Register from "./features/Register";
import SubCategoryFeature from "./features/SubCategory/index";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/subcategory/:subcateId"
            element={<SubCategoryFeature />}
          />
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
