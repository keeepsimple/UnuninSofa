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
import { Link } from "react-router-dom";
import DeleteMaterial from "./Delete";

const MaterialTable = ({ listMaterial }) => {
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
            {listMaterial.map((material) => (
              <TableRow
                key={material.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {material.name}
                </TableCell>
                <TableCell align="center">
                  {moment(material.createdAt)
                    .locale("vi")
                    .format("Do MMMM YYYY, h:mm:ss")}
                </TableCell>
                <TableCell align="center">
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <Button
                        component={Link}
                        to={"/admin/material/edit/" + material.id}
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
                          setSelectedId(material.id);
                          setName(material.name);
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
      <DeleteMaterial
        open={openedDelete}
        close={() => setOpenDelete(false)}
        id={selectedId}
        name={name}
      />
    </>
  );
};

export default MaterialTable;
