import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Grid, Paper } from "@mui/material";
import { Markup } from "interweave";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import subCategoryApi from "../../api/SubCategoryApi";
import { subCategoryImagePath } from "../../configs/serverUrl";
import "./style.css";

function SubCategoryFeature(props) {
  const match = useParams();
  const id = match.subcateId;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const [subCategory, setSubCategory] = useState({});
  useEffect(() => {
    const fetchSubCategory = async () => {
      const subCate = await subCategoryApi.get(id);
      setSubCategory(subCate);
      document.title = `${subCate.name} - Ununin Sofa`;
    };

    fetchSubCategory();
    setIsReadMore(true);
  }, [id]);

  const renderText = (text) => {
    return (
      <p className="text">
        {text === null ? (
          ""
        ) : isReadMore ? (
          <Markup content={text.slice(0, 300)} />
        ) : (
          <Markup content={text} />
        )}
        <span onClick={toggleReadMore} className="hideShow">
          {isReadMore ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
        </span>
      </p>
    );
  };

  return (
    <Grid container spacing={2} sx={{ overflow: "hidden" }}>
      <Grid item xs={12}>
        {subCategory.imageUrl != null ? (
          <img
            src={subCategoryImagePath + subCategory.imageUrl}
            alt={subCategory.name}
          />
        ) : (
          ""
        )}
      </Grid>

      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <h1 className="title">{subCategory.name}</h1>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item component={Paper} elevation={1} xs={8}>
        {!subCategory
          ? ""
          : subCategory.description
          ? renderText(subCategory.description)
          : ""}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}

export default SubCategoryFeature;
