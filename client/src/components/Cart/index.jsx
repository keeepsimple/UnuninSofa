import ArrowBackIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardRounded";
import { Avatar, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { productImagePath } from "../../configs/serverUrl";
import "./style.css";

const gridStyles = {
  paddingBottom: 10,
  paddingRight: 2,
  paddingTop: 10,
  marginLeft: "100px",
  marginRight: "auto",
  maxWidth: 1650,
};

export const Cart = ({ cartItem, addToCart, decreaseQuantity }) => {
  const totalPrice = cartItem.reduce((price, item) => {
    if (item.salePrice) {
      return price + item.quantity * item.salePrice;
    } else {
      return price + item.quantity * item.price;
    }
  }, 0);

  return (
    <Grid style={gridStyles} container spacing={4}>
      <Grid item xs={12}>
        <Stack
          component={Paper}
          direction="row"
          style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 10 }}
        >
          <div className="t-product">
            <Typography className="t-head">Sản phẩm</Typography>
          </div>
          <div className="t-title">
            <Typography className="t-head">Chất liệu</Typography>
          </div>
          <div className="t-title">
            <Typography className="t-head">Màu</Typography>
          </div>
          <div className="t-title">
            <Typography className="t-head">Số lượng</Typography>
          </div>
          <div className="t-title">
            <Typography className="t-head">Giá</Typography>
          </div>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        {cartItem.map((item) => {
          const productPrice = item.salePrice
            ? item.salePrice * item.quantity
            : item.price * item.quantity;
          return (
            <Stack
              key={item.id}
              component={Paper}
              direction="row"
              style={{ paddingTop: 10, paddingBottom: 10 }}
            >
              <div className="tb-product">
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  src={productImagePath + item.code + "/" + item.image}
                />
              </div>
              <div className="tb-title">
                <Typography>{item.name}</Typography>
              </div>
              <div className="tb-title">
                <Typography>{item.material.name}</Typography>
              </div>
              <div className="tb-title">
                <Typography>{item.color.name}</Typography>
              </div>
              <div className="tb-quantity">
                <Button onClick={() => decreaseQuantity(item)}>
                  <ArrowBackIcon color="action" fontSize="small" />
                </Button>
                {item.quantity}
                <Button onClick={() => addToCart(item)}>
                  <ArrowForwardIcon color="action" fontSize="small" />
                </Button>
              </div>
              <div className="tb-price">
                <Typography>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(productPrice)}
                </Typography>
              </div>
            </Stack>
          );
        })}
      </Grid>
      <Grid item xs={12}>
        <Stack
          component={Paper}
          style={{ paddingTop: 15, paddingBottom: 10, paddingLeft: 15 }}
          direction="row"
          spacing={150}
        >
          <p style={{ fontWeight: 500 }}>
            Tổng giá:{" "}
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(totalPrice)}
          </p>
          <Button variant="contained" color="error">
            Thanh Toán
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};
