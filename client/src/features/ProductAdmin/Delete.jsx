import { Button, Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import React from "react";
import { useNavigate } from "react-router-dom";
import productAdminApi from "../../api/ProductAdminApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 6,
};

const DeleteProduct = (props) => {
  const id = props.id;
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const onSubmit = async () => {
    try {
      await productAdminApi.remove(id);
      enqueueSnackbar("Xoá sản phẩm thành công!", { variant: "success" });
      setTimeout(navigate(0), 1000);
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };
  return (
    <Modal
      open={props.open}
      onClose={props.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={onSubmit}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Bạn có chắc chắn muốn xoá {props.name} không?
          </Typography>
          <br />
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={2}
            direction="row"
          >
            <Button type="submit" variant="outlined" color="error">
              Có
            </Button>
            <Button variant="outlined" onClick={props.close} color="primary">
              Không
            </Button>
          </Stack>
        </Box>
      </form>
    </Modal>
  );
};

export default DeleteProduct;
