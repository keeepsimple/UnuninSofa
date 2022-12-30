import {
  Box,
  Button,
  Modal,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import reviewApi from "../../api/ReviewApi";
import StorageKeys from "../../configs/storageKey";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 600,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 6,
};

export const AddReviews = (props) => {
  const [totalRate, setTotalRate] = useState(0);
  const [comment, setComment] = useState("");
  const userId = localStorage.getItem(StorageKeys.USERID);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      productId: props.productId,
      totalRate: totalRate,
      comment: comment,
      userId: userId,
    };

    try {
      await reviewApi.add(data);
      enqueueSnackbar("Tạo nhận xét thành công!", {
        variant: "success",
      });
      navigate(0);
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
          <Typography
            textAlign="center"
            id="modal-modal-title"
            variant="h5"
            component="h2"
          >
            Nhận xét của bạn
          </Typography>
          <br />
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={4}
            direction="column"
          >
            <Typography component="legend">Đánh giá sản phẩm</Typography>
            <Rating
              name="simple-controlled"
              value={totalRate}
              onChange={(event, newValue) => {
                setTotalRate(newValue);
              }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Nhận xét của bạn"
              multiline
              rows={10}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              fullWidth
              focused
              color="warning"
              placeholder="Viết gì đó..."
            />
            <Button type="submit" color="primary" variant="outlined">
              Bình luận
            </Button>
          </Stack>
        </Box>
      </form>
    </Modal>
  );
};
