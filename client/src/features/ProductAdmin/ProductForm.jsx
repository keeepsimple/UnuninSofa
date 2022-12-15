import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductForm = (props) => {
  const {
    name,
    code,
    rate,
    rateCount,
    price,
    view,
    status,
    subCategory,
    detail,
    size,
    materials,
    colors,
    images,
    description,
    title,
    button,
    handleSubmit,
  } = props;
  const [getName, setName] = useState("");
  const [getCode, SetCode] = useState("");
  const [getPrice, setPrice] = useState("");
  const [getStatus, setStatus] = useState("");
  const [getSubCategory, setSubCategory] = useState("");
  const [getDetail, setDetail] = useState("");
  const [getSize, setSize] = useState("");
  const [getMaterials, setMaterials] = useState("");
  const [getColors, setColors] = useState("");
  const [getImages, setImages] = useState("");
  const [getDescription, setDescription] = useState("");

  useEffect(() => {
    setName(name);
    setDescription(description);
    SetCode(code);
    setPrice(price);
    setStatus(status);
    setSubCategory(subCategory);
    setDetail(detail);
    setSize(size);
    setMaterials(materials);
    setColors(colors);
    setImages(images);
  }, [
    name,
    description,
    code,
    price,
    status,
    subCategory,
    detail,
    size,
    materials,
    colors,
    images,
  ]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/admin/product");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // handleSubmit({ name: getName, description: getDescription });
  };
  return (
    <Box component="form" onSubmit={onSubmit}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={6}
      >
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={3} direction="row">
            <TextField
              name="name"
              label="Tên"
              value={getName}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              name="code"
              label="Mã sản phẩm"
              value={getCode}
              onChange={(e) => SetCode(e.target.value)}
              required
            />
            <TextField
              name="price"
              label="Giá"
              value={getPrice}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <TextField name="rate" label="Đánh giá" value={rate} />
            <TextField
              name="rateCount"
              label="Lượt đánh giá"
              value={rateCount}
            />
            <TextField name="view" label="Lượt xem" value={view} />
          </Stack>
        </Grid>
        <Grid item xs>
          <Stack spacing={3} direction="row">
            <TextField
              name="status"
              label="Trạng thái"
              value={getStatus}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
            <TextField
              name="size"
              label="Kích thước"
              style={{ width: "500px" }}
              value={getSize}
              onChange={(e) => setSize(e.target.value)}
              required
            />
            <TextField
              name="subCategory"
              label="Tiểu mục"
              value={getSubCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              required
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            label="Mô tả"
            value={getDescription}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "950px" }}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="name"
            label="Tên"
            value={getName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Tên"
            value={getName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Tên"
            value={getName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Tên"
            value={getName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Tên"
            value={getName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Tên"
            value={getName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Tên"
            value={getName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Tên"
            value={getName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="name"
            label="Tên"
            value={getName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Tên"
            value={getName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Tên"
            value={getName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={3} direction="row">
            <Button type="submit" variant="contained" color="success">
              {button}
            </Button>
            <Button onClick={handleBack} variant="outlined">
              Trở về
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
