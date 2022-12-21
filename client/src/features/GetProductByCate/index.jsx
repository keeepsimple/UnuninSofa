import { Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import productApi from "../../api/ProductApi";
import { ListProduct } from "./ListProduct";

export const ListProductFeatures = ({ subId, isPaging, pageSize }) => {
  const [products, setProducts] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalItem, setTotalItem] = useState(1);
  const totalPage = Math.ceil(totalItem / pageSize);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await productApi.getPaging(pageNum, {
        pageSize: `${pageSize}`,
        subCateId: `${subId}`,
      });
      setTotalItem(data.count);
      setProducts(data.list);
    };

    fetchProduct();
  }, [subId, pageNum, pageSize]);

  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <ListProduct products={products} />
      </Grid>
      <Grid item xs={12}>
        {isPaging ? (
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Pagination
              count={totalPage}
              variant="outlined"
              color="secondary"
              page={pageNum}
              onChange={handleChange}
            />
          </Stack>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};
