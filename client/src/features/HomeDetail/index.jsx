import { Button, Grid, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import subCategoryApi from "../../api/SubCategoryApi";
import { ListProductFeatures } from "../GetProductByCate/index";

const gridStyles = {
  paddingBottom: 10,
  paddingRight: 2,
  marginTop: 10,
  marginLeft: "150px",
  marginRight: "auto",
  maxWidth: 1650,
};

export const HomeDetail = () => {
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
          <Fragment key={subCate.id}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                style={{ paddingLeft: 30 }}
              >
                {subCate.name} -{" "}
                <Button
                  variant="outlined"
                  component={Link}
                  to={"/subcategory/" + subCate.id}
                  color="error"
                >
                  Xem Tất Cả
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <ListProductFeatures
                subId={subCate.id}
                isPaging={false}
                pageSize={3}
              />
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </>
  );
};
