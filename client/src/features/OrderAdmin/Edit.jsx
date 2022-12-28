import {
  Button,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import orderAdminApi from "../../api/OrderAdminApi";
import "./style.css";

const convertToVND = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

const EditOrder = () => {
  const match = useParams();
  const id = match.id;
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const fetchOrder = async () => {
      const data = await orderAdminApi.get(id);
      setOrder(data);
    };

    fetchOrder();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await orderAdminApi.changeStatus(id);
      enqueueSnackbar("Cập nhật trạng thái thành công!", {
        variant: "success",
      });
      navigate("/admin/order");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  const handleCancelOrder = async (e) => {
    e.preventDefault();
    try {
      await orderAdminApi.cancel(id);
      enqueueSnackbar("Huỷ đơn thành công!", {
        variant: "success",
      });
      navigate("/admin/order");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <form>
      <Grid
        style={{ paddingLeft: 10 }}
        direction="column"
        container
        spacing={6}
      >
        <Grid item xs={12} />
        <Grid item xs={12}>
          <Stack direction="row" spacing={3}>
            <TextField
              id="fullname"
              name="fullname"
              className="order"
              value={order.fullName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Tên khách hàng
                  </InputAdornment>
                ),
                readOnly: true,
              }}
              readOnly
            />
            <TextField
              name="address"
              className="order"
              value={order.address}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Địa chỉ</InputAdornment>
                ),
                readOnly: true,
              }}
              readOnly
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={3}>
            <TextField
              name="phoneNumber"
              className="order"
              value={order.phoneNumber}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Số điện thoại
                  </InputAdornment>
                ),
                readOnly: true,
              }}
              readOnly
            />
            <TextField
              name="totalPrice"
              className="order"
              value={convertToVND(order.totalPrice)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Tổng giá</InputAdornment>
                ),
                readOnly: true,
              }}
              readOnly
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={3}>
            <TextField
              name="method"
              className="order"
              value={
                order.transactions && order.transactions[0].mode === 1
                  ? "VISA"
                  : "Chuyển khoản"
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Phương thức thanh toán
                  </InputAdornment>
                ),
                readOnly: true,
              }}
            />
            <TextField
              name="status"
              className="order"
              value={
                order.transactions && order.transactions[0].status === 1
                  ? "Đã thanh toán"
                  : "Chưa thanh toán"
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Trạng thái thanh toán
                  </InputAdornment>
                ),
                readOnly: true,
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            {" "}
            {order.status < 0
              ? "Huỷ đơn"
              : order.status === 0
              ? "Chờ xác nhận"
              : order.status === 1
              ? "Đã thanh toán"
              : order.status === 2
              ? "Đang giao hàng"
              : "Giao hàng thành công"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TableContainer style={{ width: 1100 }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Mã sản phẩm</TableCell>
                  <TableCell>Sản phẩm</TableCell>
                  <TableCell align="center">Chất liệu</TableCell>
                  <TableCell align="center">Màu</TableCell>
                  <TableCell align="center">Số lượng</TableCell>
                  <TableCell align="right">Giá</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.orderDetails &&
                  order.orderDetails.map((item, index) => {
                    const productPrice = item.price * item.quantity;
                    return (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {item.productCode}
                        </TableCell>
                        <TableCell>{item.productName}</TableCell>
                        <TableCell align="center">
                          {item.materialName}
                        </TableCell>
                        <TableCell align="center">{item.colorName}</TableCell>
                        <TableCell align="center">{item.quantity}</TableCell>
                        <TableCell align="right">
                          <p style={{ fontSize: 15, fontWeight: 500 }}>
                            {convertToVND(productPrice)}
                          </p>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={5} direction="row">
            {order.status < 3 && (
              <>
                {order.status >= 0 ? (
                  <Button
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    variant="contained"
                  >
                    {order.status === 1
                      ? "Giao hàng"
                      : order.status === 2
                      ? "Giao hàng thành công"
                      : "Đã Thanh toán"}
                  </Button>
                ) : (
                  ""
                )}
                {order.status === 0 ? (
                  <Button
                    onClick={(e) => handleCancelOrder(e)}
                    variant="contained"
                    color="warning"
                  >
                    Huỷ đơn
                  </Button>
                ) : (
                  ""
                )}
              </>
            )}

            <Button onClick={handleBack} variant="outlined">
              Trở về
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditOrder;
