import {
  Avatar,
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
import { productImagePath } from "../../configs/serverUrl";
import StorageKeys from "../../configs/storageKey";

const convertToVND = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

export const CartInfo = ({ cartItem }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  localStorage.setItem(StorageKeys.TOTALPRICE, totalPrice);
  return (
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
  );
};
