import { Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import "moment/locale/vi";
import React, { useState } from "react";
import DeleteCategory from "./Delete";
import EditCategory from "./Edit";

const CategoryTable = ({ listCate }) => {
  const [openedEdit, setOpenEdit] = useState(false);
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
              <TableCell align="center">Ngày tạo</TableCell>
              <TableCell align="left">Quản lý</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listCate.map((cate) => (
              <TableRow
                key={cate.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {cate.name}
                </TableCell>
                <TableCell align="center">
                  {moment(cate.createdAt)
                    .locale("vi")
                    .format("Do MMMM YYYY, h:mm:ss")}
                </TableCell>
                <TableCell align="center">
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <Button
                        onClick={() => {
                          setOpenEdit(true);
                          setSelectedId(cate.id);
                          setName(cate.name);
                        }}
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
                          setSelectedId(cate.id);
                          setName(cate.name);
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
      <EditCategory
        open={openedEdit}
        close={() => setOpenEdit(false)}
        name={name}
        id={selectedId}
      />
      <DeleteCategory
        open={openedDelete}
        close={() => setOpenDelete(false)}
        name={name}
        id={selectedId}
      />
    </>
  );
};

export default CategoryTable;
