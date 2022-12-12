import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import authenApi from "../../api/AuthenApi";
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
  });

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      phoneNumber: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const token = await authenApi.register(data);
      if (token !== null) {
        localStorage.setItem("token", token);
        enqueueSnackbar("Đăng ký thành công!", { variant: "success" });
      }
    } catch (err) {
      console.log(err);
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
