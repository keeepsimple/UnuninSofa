import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import subCategoryApi from "../../api/SubCategoryApi";

function SubCategory({ cateId }) {
  const [subListCategories, setSubListCategories] = useState([]);

  useEffect(() => {
    async function fetchSubCategories() {
      const subList = await subCategoryApi.getAll();
      setSubListCategories(subList);
    }

    fetchSubCategories();
  }, []);
  return (
    <ul className="submenu">
      {subListCategories.map((subCate) =>
        subCate.categoryId === cateId ? (
          <li key={subCate.id}>
            <Link to={"/subcategory/" + subCate.id}>{subCate.name}</Link>
          </li>
        ) : (
          ""
        )
      )}
    </ul>
  );
}

export default SubCategory;
