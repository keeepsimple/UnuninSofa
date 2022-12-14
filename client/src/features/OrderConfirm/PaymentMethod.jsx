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

  const asyncLocalStorage = {
    setItem: function (key, value) {
      return Promise.resolve().then(function () {
        localStorage.setItem(key, value);
      });
    },
    getItem: function (key) {
      return Promise.resolve().then(function () {
        return localStorage.getItem(key);
      });
    },
  };

  const handleClick = () => {
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
    } else {
      navigate("/credit-card");
    }
  };

  const createOrder = async (data) => {
    try {
      const response = await orderApi.create(data);
      asyncLocalStorage
        .setItem(StorageKeys.ORDER, JSON.stringify(response))
        .then(() => {
          navigate("/transfer");
        });
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
            ????n h??ng
          </Typography>
          <Divider />
          <Typography>C?? {totalProduct} s???n ph???m trong ????n h??ng</Typography>
          <Divider />
          <Stack direction="row" spacing={35}>
            <Typography>Th??nh ti???n:</Typography>
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
            Ph????ng th???c thanh to??n
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
              label="Thanh to??n b???ng chuy???n kho???n"
            />
            <FormControlLabel
              value="false"
              control={<Radio />}
              label="Thanh to??n b???ng th??? qu???c t??? Visa, Master"
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
          <Button
            type="submit"
            onClick={handleClick}
            variant="contained"
            color="error"
          >
            ?????T H??NG
          </Button>
          <Button component={Link} to="/" variant="contained" color="warning">
            CH???N TH??M S???N PH???M
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PaymentMethod;
