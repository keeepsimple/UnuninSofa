import { Button, Grid, Pagination, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryAdminApi from "../../api/CategoryAdminApi";
import useDebounceCallback from "../../components/SetDelay/SetDelay";
import CategoryTable from "./CategoryTable";

const CategoryAdmin = () => {
  document.title = `Danh mục - Ununin Sofa`;
  const [categories, setCategories] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalItem, setTotalItem] = useState(1);
  const [searchString, setSearchString] = useState("");
  const delay = useDebounceCallback(1000);
  const pageSize = 6;
  const totalPage = Math.ceil(totalItem / pageSize);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await categoryAdminApi.getPaging(pageNum, {
        pageSize: `${pageSize}`,
        searchString: `${searchString}`,
      });
      setCategories(data.list);
      setTotalItem(data.count);
    };

    fetchCategories();
  }, [pageNum, searchString]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    const data = e.target.value;
    delay(() => setSearchString(data.trim()));
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Grid container spacing={6}>
          <Grid item xs={12}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              color="success"
              component={Link}
              to="/admin/category/create"
            >
              Tạo
            </Button>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="searchString"
              placeholder="Tìm kiếm...."
              label="Tìm kiếm"
              onChange={handleSearchChange}
            />
          </Grid>
          <Grid item xs></Grid>

          <Grid item xs={12}>
            <CategoryTable listCate={categories} />
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs={4} alignItems="center">
            <Stack spacing={2}>
              <Pagination
                count={totalPage}
                variant="outlined"
                color="secondary"
                page={pageNum}
                onChange={handleChange}
              />
            </Stack>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </form>
    </>
  );
};

export default CategoryAdmin;
