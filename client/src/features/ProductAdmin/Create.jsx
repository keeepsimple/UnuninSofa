import { useSnackbar } from "notistack";
import React from "react";
import { useNavigate } from "react-router-dom";
import productAdminApi from "../../api/ProductAdminApi";
import { ProductForm } from "./ProductForm";

const CreateProduct = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = new FormData();
    data.uploadFiles.forEach((x) => {
      formData.append("uploadFiles", x);
    });
    const create = {
      product: data.product,
      productDetail: data.productDetail,
      uploadFiles: formData,
    };
    try {
      await productAdminApi.add(create);
      enqueueSnackbar("Tạo sản phẩm thành công!", { variant: "success" });
      navigate("/admin/product");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };
  return (
    <ProductForm title="Tạo sản phẩm" button="Tạo" handleSubmit={onSubmit} />
  );
};

export default CreateProduct;
