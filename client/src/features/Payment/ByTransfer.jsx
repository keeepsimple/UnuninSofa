import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import qrcode from "../../assets/images/qrcode/qrcode.png";
import { CartInfo } from "./CartInfo";
import "./style.css";

export const ByTransfer = ({ cartItem }) => {
  return (
    <Grid style={{ paddingTop: 80 }} direction="row" container spacing={3}>
      <Grid item xs={12}>
        <Stack
          component={Paper}
          style={{ paddingBottom: 30 }}
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={3}
        >
          <Typography
            style={{
              textTransform: "uppercase",
              color: "green",
              fontSize: 20,
              fontWeight: 400,
            }}
          >
            Cảm ơn quý khách đã đặt hàng tại Ununin
          </Typography>
          <Typography>Mã đơn hàng của quý khách là:</Typography>
          <Typography className="order-num">#01</Typography>
          <Typography>
            Khi chúng tôi xác nhận được thanh toán chúng tôi sẽ gọi điện để xác
            nhận
          </Typography>
          <Typography>
            VUI LÒNG QUÉT MÃ BÊN DƯỚI ĐỂ THANH TOÁN CHUYỂN KHOẢN
          </Typography>
          <img className="qrcode" src={qrcode} alt="QRCODE" />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack
          component={Paper}
          style={{ paddingBottom: 30 }}
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={3}
        >
          <Typography
            style={{
              textTransform: "uppercase",
              fontSize: 20,
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Thông tin đơn hàng
          </Typography>
          <Box className="user-info">
            <Typography>Khách hàng: abc</Typography>
            <Typography>Email: abc</Typography>
            <Typography>Số điện thoại: abc</Typography>
            <Typography>Địa chỉ: abc</Typography>
          </Box>
          <CartInfo cartItem={cartItem} />
          <Button component={Link} to="/" variant="contained" color="error">
            Tiếp tục mua hàng
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};
