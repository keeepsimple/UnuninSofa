import { useSnackbar } from "notistack";
import React from "react";
import { useNavigate } from "react-router-dom";
import materialAdminApi from "../../api/MaterialAdminApi";
import MaterialForm from "./MaterialForm";

const CreateMaterial = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await materialAdminApi.add(data);
      enqueueSnackbar("Tạo chất liệu thành công!", { variant: "success" });
      navigate("/admin/material");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return (
    <MaterialForm title="Tạo Chất Liệu" button="Tạo" handleSubmit={onSubmit} />
  );
};

export default CreateMaterial;
