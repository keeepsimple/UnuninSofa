import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryApi from "../../api/CategoryApi";
import "./style.css";
import SubCategory from "./SubCategory";

function Categories(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const cateList = await categoryApi.getAll();
      setCategories(cateList);
    };
    fetchCategories();
  }, []);
  return (
    <>
      <ul className="menu">
        {categories.map((category) => (
          <li>
            <Link to={"/category/" + category.id}>{category.name}</Link>
            <SubCategory cateId={category.id} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Categories;
