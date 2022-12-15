import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import colorAdminApi from "../../api/ColorAdminApi";
import ColorForm from "./ColorForm";

const EditColor = () => {
  const match = useParams();
  const id = match.id;
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchColor = async () => {
      const data = await colorAdminApi.get(id);
      setName(data.name);
    };

    fetchColor();
  }, [id]);

  const onSubmit = async (data) => {
    const material = {
      id: id,
      ...data,
    };
    try {
      await colorAdminApi.update(material);
      enqueueSnackbar("Sửa màu thành công!", { variant: "success" });
      navigate("/admin/color");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return (
    <ColorForm
      title="Sửa Chất Liệu"
      button="Sửa"
      name={name}
      handleSubmit={onSubmit}
    />
  );
};

export default EditColor;
