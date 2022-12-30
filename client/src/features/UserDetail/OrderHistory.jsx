import {
  Button,
  Grid,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userApi from "../../api/UserApi";
import StorageKeys from "../../configs/storageKey";

export const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalItem, setTotalItem] = useState(1);
  const pageSize = 6;
  const totalPage = Math.ceil(totalItem / pageSize);
  const [orderBy, setOrderBy] = useState("");
  const username = localStorage.getItem(StorageKeys.USERNAME);
  useEffect(() => {
    const fetchOrders = async () => {
      const data = await userApi.orderHistory(pageNum, {
        pageSize: `${pageSize}`,
        userName: `${username}`,
        sortOrder: `${orderBy}`,
      });
      setOrders(data.list);
      setTotalItem(data.count);
    };

    fetchOrders();
  }, [pageNum, username, orderBy]);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TableContainer>
          <Table
            sx={{ minWidth: 650, paddingLeft: 10 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Mã đơn hàng</TableCell>
                <TableCell align="center">Tên khách hàng</TableCell>
                <TableCell align="center">Trạng thái</TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={orderBy === ""}
                    direction={orderBy === "createdAt_asc" ? "asc" : "desc"}
                    onClick={(e) =>
                      orderBy === ""
                        ? setOrderBy("createdAt_asc")
                        : setOrderBy("")
                    }
                  >
                    Ngày mua
                  </TableSortLabel>
                </TableCell>
                <TableCell align="left">Quản lý</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
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
                      to={"/user/order/" + order.id}
                      variant="outlined"
                      color="primary"
                    >
                      Xem
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2}>
          <Pagination
            style={{ paddingLeft: 50 }}
            count={totalPage}
            variant="outlined"
            color="secondary"
            page={pageNum}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
