import { Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "moment/locale/vi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteProduct from "./Delete";

const ProductTable = ({ listProduct }) => {
  const [openedDelete, setOpenDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [name, setName] = useState("");

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tên</TableCell>
              <TableCell align="center">Giá</TableCell>
              <TableCell align="center">Lượt xem</TableCell>
              <TableCell align="center">Đánh Giá</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
              <TableCell align="left">Quản lý</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listProduct.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="center" scope="row">
                  {product.price}
                </TableCell>
                <TableCell align="center" scope="row">
                  {product.view}
                </TableCell>
                <TableCell align="center" scope="row">
                  {product.rate}
                </TableCell>
                <TableCell align="center">
                  {product.status === 1 ? "Còn hàng" : "Hết hàng"}
                </TableCell>
                <TableCell align="center">
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <Button
                        component={Link}
                        to={"/admin/product/edit/" + product.id}
                        variant="outlined"
                        color="primary"
                      >
                        Sửa
                      </Button>
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        onClick={() => {
                          setOpenDelete(true);
                          setSelectedId(product.id);
                          setName(product.name);
                        }}
                        variant="outlined"
                        color="error"
                      >
                        Xoá
                      </Button>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteProduct
        open={openedDelete}
        close={() => setOpenDelete(false)}
        id={selectedId}
        name={name}
      />
    </>
  );
};

export default ProductTable;
