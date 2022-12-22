import ArrowBackIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardRounded";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { productImagePath } from "../../configs/serverUrl";
import StorageKeys from "../../configs/storageKey";

const gridStyles = {
  paddingBottom: 10,
  paddingRight: 2,
  paddingTop: 10,
  marginLeft: "100px",
  marginRight: "auto",
  maxWidth: 1650,
};

const convertToVND = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

export const Cart = ({ cartItem, addToCart, decreaseQuantity }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const isLogin = localStorage.getItem(StorageKeys.TOKEN) ? true : false;

  return (
    <Grid style={gridStyles} container spacing={4}>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sản phẩm</TableCell>
                <TableCell></TableCell>
                <TableCell align="center">Chất liệu</TableCell>
                <TableCell align="center">Màu</TableCell>
                <TableCell align="center">Số lượng</TableCell>
                <TableCell align="right">Giá</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItem.map((item, index) => {
                const productPrice = item.price * item.quantity;
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Stack direction="row" spacing={6}>
                        <Avatar
                          sx={{ width: 100, height: 100 }}
                          src={productImagePath + item.code + "/" + item.image}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align="center">{item.material}</TableCell>
                    <TableCell align="center">{item.color}</TableCell>
                    <TableCell align="center">
                      <Button onClick={() => decreaseQuantity(item)}>
                        <ArrowBackIcon color="action" fontSize="small" />
                      </Button>
                      {item.quantity}
                      <Button onClick={() => addToCart(item)}>
                        <ArrowForwardIcon color="action" fontSize="small" />
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <p style={{ fontSize: 15, fontWeight: 500 }}>
                        {convertToVND(productPrice)}
                      </p>
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell colSpan={5} />
                <TableCell align="right">
                  <Stack direction="column" spacing={2}>
                    <p style={{ fontSize: 15, fontWeight: 500 }}>
                      Tổng giá: {"  "}
                      {convertToVND(totalPrice)}
                    </p>
                    {isLogin ? (
                      cartItem.length > 0 && (
                        <Button
                          component={Link}
                          to="/order-confirm"
                          variant="contained"
                          color="error"
                        >
                          Thanh Toán
                        </Button>
                      )
                    ) : (
                      <Button
                        component={Link}
                        to="/login"
                        variant="contained"
                        color="error"
                      >
                        Đăng nhập để thanh toán
                      </Button>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
