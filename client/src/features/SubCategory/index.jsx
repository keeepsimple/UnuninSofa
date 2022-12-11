import React from "react";
import { useParams } from "react-router-dom";

function SubCategoryFeature(props) {
  const match = useParams();
  const id = match.subcateId;
  console.log(id);
  return (
    <>
      <h1>Sub Cate</h1>
    </>
  );
}

export default SubCategoryFeature;
