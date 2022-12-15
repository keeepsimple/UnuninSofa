import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import materialAdminApi from "../../api/MaterialAdminApi";
import MaterialForm from "./MaterialForm";

const EditMaterial = () => {
  const match = useParams();
  const id = match.id;
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMaterial = async () => {
      const data = await materialAdminApi.get(id);
      setName(data.name);
      setDescription(data.description);
    };

    fetchMaterial();
  }, [id]);

  const onSubmit = async (data) => {
    const material = {
      id: id,
      ...data,
    };
    try {
      await materialAdminApi.update(material);
      enqueueSnackbar("Sửa chất liệu thành công!", { variant: "success" });
      navigate("/admin/material");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return (
    <MaterialForm
      title="Sửa Chất Liệu"
      button="Sửa"
      name={name}
      description={description}
      handleSubmit={onSubmit}
    />
  );
};

export default EditMaterial;
