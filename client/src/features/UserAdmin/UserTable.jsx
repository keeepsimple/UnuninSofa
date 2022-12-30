import { Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "moment/locale/vi";
import React from "react";
import { Link } from "react-router-dom";

const UserTable = ({ listUser }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tên người dùng</TableCell>
              <TableCell align="center">Tên đầy đủ</TableCell>
              <TableCell align="left">Quản lý</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listUser.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {user.userName}
                </TableCell>
                <TableCell align="center">{user.fullName}</TableCell>
                <TableCell align="center">
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <Button
                        component={Link}
                        to={"/admin/users/edit/" + user.id}
                        variant="outlined"
                        color="primary"
                      >
                        Sửa
                      </Button>
                    </Grid>
                    <Grid item xs={2}></Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
