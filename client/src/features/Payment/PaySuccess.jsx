import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StorageKeys from "../../configs/storageKey";
import { CartInfo } from "./CartInfo";
import "./style.css";

export const PaySuccess = ({ cartItem }) => {
  const order = JSON.parse(localStorage.getItem(StorageKeys.ORDER));

  window.addEventListener(
    "beforeunload",
    function (e) {
      localStorage.removeItem(StorageKeys.ORDER);
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.CART);
    },
    false
  );

  return order ? (
    <Grid style={{ paddingTop: 80 }} direction="row" container spacing={3}>
      <Grid item xs={12}>
        <Stack
          component={Paper}
          style={{ paddingBottom: 30 }}
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={3}
        >
          <Typography
            style={{
              textTransform: "uppercase",
              color: "green",
              fontSize: 20,
              fontWeight: 400,
            }}
          >
            Cảm ơn quý khách đã đặt hàng tại Ununin
          </Typography>
          <Typography>Mã đơn hàng của quý khách là:</Typography>
          <Typography className="order-num">#{order.id}</Typography>
          <Typography>
            Khi chúng tôi xác nhận được thanh toán chúng tôi sẽ gọi điện để xác
            nhận
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack
          component={Paper}
          style={{ paddingBottom: 30 }}
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={3}
        >
          <Typography
            style={{
              textTransform: "uppercase",
              fontSize: 20,
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Thông tin đơn hàng
          </Typography>
          <Box className="user-info">
            <Typography>Khách hàng: {order.user.fullName}</Typography>
            <Typography>Email: {order.user.email}</Typography>
            <Typography>Số điện thoại: {order.user.phoneNumber}</Typography>
            <Typography>Địa chỉ: {order.user.address}</Typography>
          </Box>
          <CartInfo cartItem={cartItem} />
          <Button component={Link} to="/" variant="contained" color="error">
            Tiếp tục mua hàng
          </Button>
        </Stack>
      </Grid>
    </Grid>
  ) : (
    <h1 style={{ textAlign: "center" }}>Not Found</h1>
  );
};
