import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import userApi from "../../api/UserApi";
import PasswordField from "../../components/FormControl/PasswordField";
import StorageKeys from "../../configs/storageKey";

export const ChangePassword = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    curPassword: yup
      .string()
      .required("Mật khẩu không được bỏ trống")
      .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
    newPassword: yup
      .string()
      .required("Mật khẩu không được bỏ trống")
      .min(6, "Mật khẩu phải có ít nhất 6 kí tự")
      .test(
        "newPassword",
        "Mật khẩu mới không được giống mật khẩu hiện tại!",
        function (value) {
          return this.parent.curPassword !== value;
        }
      ),
    confirmPassword: yup
      .string()
      .required("Nhập lại mật khẩu không được bỏ trống")
      .test("confirmPassword", "Mật khẩu không giống nhau!", function (value) {
        return this.parent.newPassword === value;
      }),
  });
  const form = useForm({
    defaultValues: {
      curPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const username = localStorage.getItem(StorageKeys.USERNAME);
    const value = {
      username: username,
      currentPassword: data.curPassword,
      newPassword: data.newPassword,
    };
    try {
      await userApi.changePassword(value);
      enqueueSnackbar("Thay đổi mật khẩu thành công!", { variant: "success" });
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
        direction="column"
        spacing={3}
      >
        <PasswordField
          fullWidth
          name="curPassword"
          label="Mật khẩu hiện tại"
          type="password"
          id="curPassword"
        />
        <PasswordField
          fullWidth
          name="newPassword"
          label="Mật khẩu mới"
          type="password"
          id="newPassword"
        />
        <PasswordField
          fullWidth
          name="confirmPassword"
          label="Nhập lại mật khẩu mới"
          type="password"
          id="confirmPassword"
        />
        <Button type="submit" variant="contained" color="error">
          Thay đổi
        </Button>
      </Stack>
    </FormProvider>
  );
};
