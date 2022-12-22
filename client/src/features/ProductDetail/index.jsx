import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productApi from "../../api/ProductApi";
import { Detail } from "./Detail";
import { ImageGallery } from "./ImageGallery";
import "./style.css";

const gridStyles = {
  paddingBottom: 10,
  paddingTop: 30,
  paddingRight: 2,
  paddingLeft: 100,
  marginRight: "auto",
  maxWidth: 1700,
  minHeight: "150vh",
};

export const ProductDetailFeatures = ({ addToCart }) => {
  const match = useParams();
  const id = match.productId;
  const [product, setProduct] = useState({});
  const [detail, setDetail] = useState({});
  const [images, setImages] = useState([]);
  const [image, setImage] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await productApi.get(id);
      setProduct(data.product);
      setDetail(data.product.productDetail);
      setImages(data.images);
      setImage(data.images[0].imageUrl);
      document.title = `${data.product.name} - Ununin Sofa`;
    };

    fetchProduct();
  }, [id]);
  return (
    <Grid style={gridStyles} container spacing={2}>
      <Grid item xs={6}>
        <ImageGallery images={images} code={product.code} />
      </Grid>
      <Grid item xs={6}>
        <Detail
          product={product}
          detail={detail}
          addToCart={addToCart}
          image={image}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          style={{ fontSize: 40, fontWeight: 200, textAlign: "center" }}
        >
          Nhận xét của khách hàng
        </Typography>
      </Grid>
    </Grid>
  );
};
