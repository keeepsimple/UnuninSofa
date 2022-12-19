import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productAdminApi from "../../api/ProductAdminApi";
import { ProductForm } from "./ProductForm";

const EditProduct = () => {
  const match = useParams();
  const id = match.id;
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [code, SetCode] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState(1);
  const [subCategory, setSubCategory] = useState(0);
  const [detail, setDetail] = useState("");
  const [size, setSize] = useState("");
  const [materials, setMaterials] = useState([]);
  const [colors, setColors] = useState([]);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [detailId, setDetailId] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await productAdminApi.get(id);
      setName(data.product.name);
      SetCode(data.product.code);
      setPrice(data.product.price);
      setStatus(data.product.status);
      setSubCategory(data.product.subCategoryId);
      setDetail(data.product.productDetail.detail);
      setSize(data.product.productDetail.size);
      setMaterials(data.product.productDetail.materials);
      setColors(data.product.productDetail.colors);
      setImages(data.images);
      setDescription(data.product.description);
      setDetailId(data.product.productDetail.id);
    };
    fetchProduct();
  }, [id]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ProductForm
      title="Sửa sản phẩm"
      button="Sửa"
      name={name}
      code={code}
      price={price}
      status={status}
      subCategory={subCategory}
      detail={detail}
      size={size}
      materials={materials}
      colors={colors}
      images={images}
      description={description}
      handleSubmit={onSubmit}
    />
  );
};

export default EditProduct;
