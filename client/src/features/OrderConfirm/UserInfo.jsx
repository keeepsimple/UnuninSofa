import { Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const UserInfo = () => {
  return (
    <Grid
      component={Paper}
      style={{
        padding: "10px 10px 10px 10px",
      }}
      container
      spacing={3}
    >
      <Grid item xs={12}>
        <Typography variant="h5" component="h1">
          Thông tin nhận hàng
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="column" spacing={3}>
          <TextField name="fullName" fullWidth label="Tên đầy đủ" />
          <TextField name="email" fullWidth label="Email" />
          <TextField name="phoneNumber" fullWidth label="Số điện thoại" />
          <TextField name="address" fullWidth label="Địa chỉ" />
          <Link className="change-info" to="/user">
            Đổi thông tin nhận hàng
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};
