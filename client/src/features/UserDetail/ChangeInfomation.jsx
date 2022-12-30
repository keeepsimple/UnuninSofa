import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import userApi from "../../api/UserApi";
import InputField from "../../components/FormControl/InputField";
import StorageKeys from "../../configs/storageKey";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export const ChangeInfomation = () => {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const username = localStorage.getItem(StorageKeys.USERNAME);

  const phoneMessage = "Số điện thoại phải đúng kiểu: 09xxxxxxxx";
  const phoneRegex =
    /^((\+){0,1}((841[0-9]{9})|(849[0-9]{8})))$|^(09[0-9]{8})$|^(01[0-9]{9})$/g;
  const schema = yup.object().shape({
    phoneNumber: yup.string().matches(phoneRegex, { message: phoneMessage }),
    address: yup.string().required("Địa chỉ không được bỏ trống"),
    fullName: yup.string().required("Họ và tên không được bỏ trống"),
  });

  const form = useForm({
    defaultValues: {
      address: "",
      phoneNumber: "",
      fullName: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchUser = async () => {
      const data = await userApi.getUser(username);
      setAddress(data.address);
      setEmail(data.email);
      setPhoneNumber(data.phoneNumber);
      setUserName(data.userName);
      setFullName(data.fullName);
      form.setValue("address", data.address);
      form.setValue("phoneNumber", data.phoneNumber);
      form.setValue("fullName", data.fullName);
    };

    fetchUser();
  }, [username]);

  const onSubmit = async (value) => {
    const data = {
      userName: username,
      email: email,
      fullName: value.fullName,
      phoneNumber: value.phoneNumber,
      address: value.address,
    };

    try {
      await userApi.changeInfomation(data);
      enqueueSnackbar("Thay đổi thông tin thành công!", { variant: "success" });
      navigate(0);
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return (
    <FormProvider {...form}>
      <Stack
        component="form"
        onSubmit={form.handleSubmit(onSubmit)}
        spacing={3}
      >
        <TextField
          fullWidth
          name="username"
          value={userName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Tên đăng nhập</InputAdornment>
            ),
            readOnly: true,
          }}
        />
        <TextField
          fullWidth
          name="email"
          value={email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Email</InputAdornment>
            ),
            readOnly: true,
          }}
        />
        <InputField
          fullWidth
          name="fullName"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            form.setValue("fullName", e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Tên đầy đủ</InputAdornment>
            ),
          }}
        />
        <InputField
          fullWidth
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            form.setValue("phoneNumber", e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Số điện thoại</InputAdornment>
            ),
          }}
        />
        <InputField
          fullWidth
          name="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            form.setValue("address", e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Địa chỉ</InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" color="error">
          Thay đổi
        </Button>
      </Stack>
    </FormProvider>
  );
};
