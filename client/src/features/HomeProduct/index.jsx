import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import subCategoryApi from "../../api/SubCategoryApi";
import { ListProduct } from "./ListProduct";

const gridStyles = {
  paddingBottom: 10,
  paddingRight: 2,
  marginTop: 10,
  marginLeft: "150px",
  marginRight: "auto",
  maxWidth: 1650,
};

export const HomeProduct = () => {
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    const fetchSubCategories = async () => {
      const data = await subCategoryApi.getByCate(1);
      setSubCategories(data);
    };
    fetchSubCategories();
  }, []);

  return (
    <>
      <Grid style={gridStyles} container rowSpacing={3}>
        {subCategories.map((subCate) => (
          <Grid key={subCate.id} item xs={12}>
            <Typography
              variant="h4"
              align="center"
              style={{ paddingLeft: 30 }}
              component={Link}
              to={"/subcategory/" + subCate.id}
            >
              {subCate.name}
            </Typography>
            <ListProduct subId={subCate.id} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
