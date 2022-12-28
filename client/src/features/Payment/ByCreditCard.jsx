import { Button, Grid, Stack, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import orderApi from "../../api/OrderApi";
import StorageKeys from "../../configs/storageKey";

export const ByCreditCard = ({ cartItem }) => {
  const [cardNumber, setCardNumber] = useState(0);
  const [fullName, setFullName] = useState("");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [cvc, setCvc] = useState("");
  const [errMonth, setErrMonth] = useState("");
  const [errYear, setErrYear] = useState("");
  const [errCardNum, setErrCardNum] = useState("");
  const [errCvc, setErrCvc] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleCardNumber = (e) => {
    const pattern = "^4[0-9]{12}(?:[0-9]{3})?$";
    const data = e.target.value;
    setCardNumber(data);
    if (!data.match(pattern)) {
      setErrCardNum("Số trên thẻ không đúng định dạng 4xxx xxxx xxxxx");
    } else {
      setErrCardNum("");
    }
  };

  const handleMonth = (e) => {
    const pattern = "^(0[1-9]|1[0-2])";
    const data = e.target.value;
    setMonth(data);
    if (!data.match(pattern)) {
      setErrMonth("Tháng phải nhập 0x hoặc 11, 12");
    } else {
      setErrMonth("");
    }
  };

  const handleYear = (e) => {
    const pattern = "([0-9]{2})";
    const data = e.target.value;
    setYear(data);
    if (!data.match(pattern)) {
      setErrYear("Năm phải nhập 2 số cuối của năm");
    } else {
      setErrYear("");
    }
  };

  const handleCvc = (e) => {
    const pattern = "([0-9]{3})";
    const data = e.target.value;
    setCvc(data);
    if (!data.match(pattern)) {
      setErrCvc("CVC phải nhập 3 số");
    } else {
      setErrCvc("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = localStorage.getItem(StorageKeys.TOTALPRICE);
    const user = JSON.parse(localStorage.getItem(StorageKeys.USER));
    const orderDetails = cartItem.map((item) => ({
      productName: item.name,
      productCode: item.code,
      materialName: item.material,
      colorName: item.color,
      price: item.price,
      quantity: item.quantity,
    }));

    const data = {
      order: {
        address: user.address,
        status: 0,
        totalPrice: totalPrice,
        username: user.userName,
      },
      orderDetails: orderDetails,
      transaction: {
        mode: 1,
        creditCard: cardNumber,
      },
    };

    createOrder(data);
  };

  const createOrder = async (data) => {
    try {
      const response = await orderApi.create(data);
      localStorage.setItem(StorageKeys.ORDER, JSON.stringify(response));
      navigate("/paysuccess");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return (
    <Grid style={{ paddingTop: 80 }} direction="row" container spacing={3}>
      <Grid item xs={12}>
        <Stack
          component="form"
          style={{ paddingBottom: 30 }}
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={3}
        >
          <TextField
            style={{ width: 420 }}
            onChange={handleCardNumber}
            label="Số trên thẻ"
            value={cardNumber}
            error={errCardNum}
            helperText={errCardNum}
            required
          />
          <TextField
            style={{ width: 420 }}
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            label="Tên đầy đủ"
            required
          />
          <Stack direction="row">
            <TextField
              onChange={handleMonth}
              value={month}
              error={errMonth}
              helperText={errMonth}
              label="Tháng"
              required
            />
            <TextField
              onChange={handleYear}
              value={year}
              error={errYear}
              helperText={errYear}
              label="Năm"
              required
            />
          </Stack>
          <TextField
            style={{ width: 420 }}
            value={cvc}
            onChange={handleCvc}
            label="CVC"
            error={errCvc}
            helperText={errCvc}
            type="password"
            required
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            type="submit"
            color="primary"
          >
            Thanh toán
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};
