import {
  Avatar,
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
import { productImagePath } from "../../configs/serverUrl";

const gridStyles = {
  paddingBottom: 10,
  paddingRight: 2,
  paddingTop: 10,
  marginLeft: "100px",
  marginRight: "auto",
  maxWidth: 1650,
  minHeight: "150vh",
};

export const Cart = ({ cartItem, addToCard, decreaseQuantity }) => {
  return (
    <Grid style={gridStyles} container spacing={4}>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sản phẩm</TableCell>
                <TableCell align="center">Chất liệu</TableCell>
                <TableCell align="center">Màu</TableCell>
                <TableCell align="center">Số lượng</TableCell>
                <TableCell align="right">Giá</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItem.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={6}>
                      <Avatar
                        sx={{ width: 100, height: 100 }}
                        src={productImagePath + item.code + "/" + item.image}
                      />
                      <p>{item.name}</p>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">{item.material.name}</TableCell>
                  <TableCell align="center">{item.color.name}</TableCell>
                  <TableCell align="center">{item.quantity}</TableCell>
                  <TableCell align="right">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
