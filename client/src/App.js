import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Headers";
import Home from "./pages/Home/Home";
import SubCategoryFeature from "./features/SubCategory/index";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/subcategory/:subcateId"
          element={<SubCategoryFeature />}
        />
      </Routes>
    </>
  );
}

export default App;
