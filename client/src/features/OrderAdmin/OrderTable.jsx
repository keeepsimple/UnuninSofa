import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "moment/locale/vi";
import moment from "moment/moment";
import React from "react";
import { Link } from "react-router-dom";

const OrderTable = ({ listOrder }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Mã đơn hàng</TableCell>
              <TableCell align="center">Tên khách hàng</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
              <TableCell align="center">Ngày mua</TableCell>
              <TableCell align="left">Quản lý</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listOrder.map((order) => (
              <TableRow
                key={order.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {order.id}
                </TableCell>
                <TableCell align="center" scope="row">
                  {order.fullName}
                </TableCell>
                <TableCell align="center">
                  {order.status < 0
                    ? "Huỷ đơn"
                    : order.status === 0
                    ? "Chờ xác nhận"
                    : order.status === 1
                    ? "Đã thanh toán"
                    : order.status === 2
                    ? "Đang giao hàng"
                    : "Giao hàng thành công"}
                </TableCell>
                <TableCell align="center">
                  {moment(order.createdAt)
                    .locale("vi")
                    .format("Do MMMM YYYY, h:mm:ss")}
                </TableCell>
                <TableCell align="left">
                  <Button
                    component={Link}
                    to={"/admin/order/edit/" + order.id}
                    variant="outlined"
                    color="primary"
                  >
                    Cập nhật
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrderTable;
