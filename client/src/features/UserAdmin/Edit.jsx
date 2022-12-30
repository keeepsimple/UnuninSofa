import {
  Button,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userAdminApi from "../../api/UserAdminApi";
import { OrderSuccessChart } from "./OrderSuccessChart";

export const EditUser = () => {
  const match = useParams();
  const id = match.id;
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useState({});
  const [report, setReport] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await userAdminApi.get(id);
      setUser(data.user);
      setReport(data.report);
    };

    fetchUser();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleLockUser = async () => {
    try {
      await userAdminApi.lockUser(id);
      enqueueSnackbar("Khoá người dùng thành công!", { variant: "success" });
      navigate("/admin/users");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  const handleUnlockUser = async () => {
    try {
      await userAdminApi.unlockUser(id);
      enqueueSnackbar("Mở khoá người dùng thành công!", { variant: "success" });
      navigate("/admin/users");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} />
      <Grid item xs={12} md={4} lg={8}>
        <Stack
          style={{
            width: 900,
            paddingLeft: 10,
            paddingBottom: 20,
            paddingRight: 20,
          }}
          justifyContent="center"
          alignItems="center"
          component={Paper}
          spacing={3}
        >
          <TextField
            fullWidth
            name="username"
            value={user.userName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Tên đăng nhập</InputAdornment>
              ),
              readOnly: true,
            }}
          />
          <TextField
            fullWidth
            name="email"
            value={user.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Email</InputAdornment>
              ),
              readOnly: true,
            }}
          />
          <TextField
            fullWidth
            name="fullName"
            value={user.fullName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Tên đầy đủ</InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            name="phoneNumber"
            value={user.phoneNumber}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Số điện thoại</InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            name="address"
            value={user.address}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Địa chỉ</InputAdornment>
              ),
            }}
          />
          <Stack direction="row" spacing={3}>
            {user.lockoutEnabled === false ? (
              <Button
                variant="contained"
                onClick={handleLockUser}
                color="error"
              >
                Khoá người dùng
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleUnlockUser}
                color="success"
              >
                Mở khoá người dùng
              </Button>
            )}
            <Button onClick={handleBack} variant="outlined">
              Trở về
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper
          sx={{
            p: 5,
            display: "flex",
            flexDirection: "column",
            height: 450,
          }}
        >
          Tỉ lệ đặt đơn
          <OrderSuccessChart report={report} />
        </Paper>
      </Grid>
    </Grid>
  );
};
