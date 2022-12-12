import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import authenApi from "../../api/AuthenApi";
import StorageKeys from "../../configs/storageKey";
import LoginForm from "./LoginForm";

function Login(props) {
  const { enqueueSnackbar } = useSnackbar();
  const schema = yup.object().shape({
    username: yup.string().required("Tên đăng nhập không được bỏ trống"),
    password: yup.string().required("Mật khẩu không được bỏ trống"),
  });
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const token = await authenApi.login(data);
      if (token !== null) {
        localStorage.setItem(StorageKeys.TOKEN, token);
        enqueueSnackbar("Đăng nhập thành công!", { variant: "success" });
        navigate("/");
      }
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <LoginForm />
        </form>
      </FormProvider>
    </>
  );
}

export default Login;
