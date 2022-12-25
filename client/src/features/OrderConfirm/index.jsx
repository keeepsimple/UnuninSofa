import { Grid, Stack } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CartInfo } from "./CartInfo";
import PaymentMethod from "./PaymentMethod";
import "./style.css";
import { UserInfo } from "./UserInfo";

const gridStyles = {
  paddingBottom: 10,
  paddingTop: 30,
  paddingRight: 2,
  paddingLeft: 100,
  marginRight: "auto",
  maxWidth: 1700,
  minHeight: "100vh",
};

const OrderConfirm = ({ cartItem }) => {
  document.title = `Xác nhận đơn hàng - Ununin Sofa`;
  const location = useLocation();

  return cartItem.length > 0 ? (
    <Grid style={gridStyles} container direction="row" spacing={3}>
      <Grid item xs={8}>
        <Stack direction="column" spacing={6}>
          <UserInfo />
          <CartInfo cartItem={cartItem} />
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <PaymentMethod totalProduct={cartItem.length} cartItem={cartItem} />
      </Grid>
    </Grid>
  ) : (
    <Navigate to="/cart" state={{ from: location }} replace />
  );
};

export default OrderConfirm;
