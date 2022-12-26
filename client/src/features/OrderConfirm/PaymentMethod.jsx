import { Button, Grid, Paper, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Stack } from "@mui/system";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import orderApi from "../../api/OrderApi";
import StorageKeys from "../../configs/storageKey";

const convertToVND = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

const PaymentMethod = ({ totalProduct, cartItem }) => {
  const totalPrice = localStorage.getItem(StorageKeys.TOTALPRICE);
  const [isTransfer, setTransfer] = useState(true);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    isTransfer === true ? navigate("/transfer") : navigate("/credit-card");
    const user = JSON.parse(localStorage.getItem(StorageKeys.USER));
    const orderDetails = cartItem.map((item) => ({
      productName: item.name,
      productCode: item.code,
      materialName: item.material,
      colorName: item.color,
      price: item.price,
      quantity: item.quantity,
    }));

    if (isTransfer === true) {
      const data = {
        order: {
          address: user.address,
          status: 0,
          totalPrice: totalPrice,
          username: user.userName,
        },
        orderDetails: orderDetails,
        transaction: {
          mode: 0,
        },
      };

      createOrder(data);
    }
  };

  const createOrder = async (data) => {
    try {
      const response = await orderApi.create(data);
      localStorage.setItem(StorageKeys.ORDER, JSON.stringify(response));
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return (
    <Grid container style={{ paddingTop: 10 }} direction="column" spacing={6}>
      <Grid item xs={12}>
        <Stack
          style={{ paddingLeft: 10 }}
          component={Paper}
          direction="column"
          spacing={3}
        >
          <Typography variant="h5" component="h5">
            Đơn hàng
          </Typography>
          <Divider />
          <Typography>Có {totalProduct} sản phẩm trong đơn hàng</Typography>
          <Divider />
          <Stack direction="row" spacing={35}>
            <Typography>Thành tiền:</Typography>
            <Typography style={{ color: "red", fontWeight: 500 }}>
              {convertToVND(totalPrice)}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack
          style={{ paddingLeft: 10 }}
          component={Paper}
          direction="column"
          spacing={3}
        >
          <Typography variant="h5" component="h5">
            Phương thức thanh toán
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="transfer"
            value={isTransfer}
            onChange={(e) => setTransfer(e.target.value)}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="true"
              control={<Radio />}
              label="Thanh toán bằng chuyển khoản"
            />
            <FormControlLabel
              value="false"
              control={<Radio />}
              label="Thanh toán bằng thẻ quốc tế Visa, Master"
            />
          </RadioGroup>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack
          style={{ paddingLeft: 10, paddingBottom: 10, paddingRight: 10 }}
          component={Paper}
          direction="column"
          spacing={2}
        >
          <Button onClick={handleClick} variant="contained" color="error">
            ĐẶT HÀNG
          </Button>
          <Button component={Link} to="/" variant="contained" color="warning">
            CHỌN THÊM SẢN PHẨM
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PaymentMethod;
