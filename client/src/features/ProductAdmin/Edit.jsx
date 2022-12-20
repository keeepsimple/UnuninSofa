import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import imageAdminApi from "../../api/ImageAdminApi";
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

  const bindSelectToList = (data) => {
    const list = [];
    data.forEach((item) => {
      list.push(item.value);
    });
    return list;
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    const filteredImages = data.uploadImages.filter(
      (img) => !images.includes(img)
    );

    data.uploadImages = filteredImages;
    Array.from(data.uploadImages).forEach((image) => {
      formData.append("images", image);
    });
    formData.append("productCode", data.product.code);

    data.productDetail.materialIds = bindSelectToList(
      data.productDetail.materialIds
    );
    data.productDetail.colorIds = bindSelectToList(data.productDetail.colorIds);
    data.productDetail.id = detailId;
    data.product.id = id;
    const mainProduct = {
      product: data.product,
      productDetail: data.productDetail,
    };

    try {
      await productAdminApi.update(mainProduct);
      await imageAdminApi.add(formData);
      enqueueSnackbar("Sửa sản phẩm thành công!", { variant: "success" });
      navigate("/admin/product");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
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
