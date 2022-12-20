import { useSnackbar } from "notistack";
import React from "react";
import { useNavigate } from "react-router-dom";
import productAdminApi from "../../api/ProductAdminApi";
import imageAdminApi from "../../api/ImageAdminApi";
import { ProductForm } from "./ProductForm";

const CreateProduct = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const bindSelectToList = (data) => {
    const list = [];
    data.forEach((item) => {
      list.push(item.value);
    });
    return list;
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    Array.from(data.uploadImages).forEach((image) => {
      formData.append("images", image);
    });
    formData.append("productCode", data.product.code);

    data.productDetail.materialIds = bindSelectToList(
      data.productDetail.materialIds
    );
    data.productDetail.colorIds = bindSelectToList(data.productDetail.colorIds);
    const mainProduct = {
      product: data.product,
      productDetail: data.productDetail,
    };

    try {
      await productAdminApi.add(mainProduct);
      await imageAdminApi.add(formData);
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
