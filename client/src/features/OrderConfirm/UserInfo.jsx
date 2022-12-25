import { Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authenApi from "../../api/AuthenApi";
import StorageKeys from "../../configs/storageKey";

export const UserInfo = () => {
  const [user, setUser] = useState({});
  const username = localStorage.getItem(StorageKeys.USERNAME);
  useEffect(() => {
    const fetchUser = async () => {
      const data = await authenApi.getUser(username);
      setUser(data);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(data));
    };

    fetchUser();
  }, [username]);
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
          <Typography>Tên đầy đủ: {user.fullName}</Typography>
          <Typography>Email: {user.email}</Typography>
          <Typography>Số điện thoại: {user.phoneNumber}</Typography>
          <Typography>Địa chỉ: {user.address}</Typography>
          <Link className="change-info" to="/user">
            Đổi thông tin nhận hàng
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};
