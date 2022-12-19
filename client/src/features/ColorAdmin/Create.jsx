import { useSnackbar } from "notistack";
import React from "react";
import { useNavigate } from "react-router-dom";
import colorAdminApi from "../../api/ColorAdminApi";
import ColorForm from "./ColorForm";

const CreateColor = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await colorAdminApi.add(data);
      enqueueSnackbar("Tạo màu thành công!", { variant: "success" });
      navigate("/admin/color");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return <ColorForm title="Tạo Màu" button="Tạo" handleSubmit={onSubmit} />;
};

export default CreateColor;
