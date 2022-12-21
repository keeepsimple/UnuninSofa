import { Button, Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  borderRadius: "5px",
  boxShadow: 24,
  p: 6,
  textAlign: "center",
};

const ConfirmAddToCart = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          Sản phẩm đã được thêm vào giỏ hàng
        </Typography>
        <br />
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={2}
          direction="row"
        >
          <Button
            variant="outlined"
            component={Link}
            to="/cart"
            color="primary"
          >
            Xem giỏ hàng
          </Button>
          <Button variant="outlined" onClick={props.close} color="error">
            Mua hàng tiếp
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ConfirmAddToCart;
