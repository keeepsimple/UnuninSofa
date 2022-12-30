import { yupResolver } from "@hookform/resolvers/yup";
import jwtDecode from "jwt-decode";
import { useSnackbar } from "notistack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import authenApi from "../../api/AuthenApi";
import StorageKeys from "../../configs/storageKey";
import RegisterForm from "./RegisterForm";

function Register(props) {
  const { enqueueSnackbar } = useSnackbar();
  const phoneMessage = "Số điện thoại phải đúng kiểu: 09xxxxxxxx";
  const phoneRegex =
    /^((\+84|84|0)?((3[2-9]|5[25689]|7[0|6-9]|8[0-9]|9[0-4|6-9]|2[0-9])|(12[0-9]|16[2-9]|18[68]|199)))([0-9]{7})$/g;
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email không được bỏ trống")
      .email("Nhập email theo ví dụ: abc@example.com"),
    username: yup.string().required("Tên đăng nhập không được bỏ trống"),
    phoneNumber: yup.string().matches(phoneRegex, { message: phoneMessage }),
    address: yup.string().required("Địa chỉ không được bỏ trống"),
    password: yup
      .string()
      .required("Mật khẩu không được bỏ trống")
      .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
    confirmPassword: yup
      .string()
      .required("Nhập lại mật khẩu không được bỏ trống")
      .test("confirmPassword", "Mật khẩu không giống nhau!", function (value) {
        return this.parent.password === value;
      }),
    fullname: yup.string().required("Họ và tên không được bỏ trống"),
  });
  document.title = "Đăng ký - Ununin Sofa";

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      phoneNumber: "",
      address: "",
      password: "",
      confirmPassword: "",
      fullname: "",
    },
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await authenApi.register(data);
      localStorage.setItem(StorageKeys.TOKEN, response.token);
      localStorage.setItem(StorageKeys.REFRESHTOKEN, response.refreshToken);
      const decoded = jwtDecode(response.token);
      localStorage.setItem(
        StorageKeys.ROLE,
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
      );
      localStorage.setItem(
        StorageKeys.USERNAME,
        decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
      );
      localStorage.setItem(StorageKeys.USERID, decoded["UserId"]);
      enqueueSnackbar("Đăng ký thành công!", { variant: "success" });
      navigate("/");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <RegisterForm />
        </form>
      </FormProvider>
    </>
  );
}

export default Register;
