import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import colorAdminApi from "../../api/ColorAdminApi";
import imageAdminApi from "../../api/ImageAdminApi";
import materialAdminApi from "../../api/MaterialAdminApi";
import subCategoryAdminApi from "../../api/SubCategoryAdminApi";
import { productImagePath } from "../../configs/serverUrl";

export const ProductForm = (props) => {
  const {
    name,
    code,
    price,
    status,
    subCategory,
    detail,
    size,
    materials,
    colors,
    images,
    description,
    title,
    button,
    handleSubmit,
  } = props;
  const [getName, setName] = useState("");
  const [getCode, SetCode] = useState("");
  const [getPrice, setPrice] = useState(0);
  const [getStatus, setStatus] = useState(1);
  const [getSubCategory, setSubCategory] = useState(0);
  const [getDetail, setDetail] = useState("");
  const [getSize, setSize] = useState("");
  const [getMaterials, setMaterials] = useState([]);
  const [getColors, setColors] = useState([]);
  const [getImages, setImages] = useState([]);
  const [getDescription, setDescription] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [listMaterial, setListMaterial] = useState([]);
  const [listColor, setListColor] = useState([]);
  const [preview, setPreview] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setName(name ? name : "");
    setDescription(description ? description : "");
    SetCode(code ? code : "");
    setPrice(price ? price : 0);
    setStatus(status ? status : 1);
    setSubCategory(subCategory ? subCategory : 0);
    setDetail(detail ? detail : "");
    setSize(size ? size : "");
    const materialOption = materials
      ? materials.map((m) => ({
          value: m.id,
          label: m.name,
        }))
      : [];
    setMaterials(materialOption);
    const colorOption = colors
      ? colors.map((m) => ({
          value: m.id,
          label: m.name,
        }))
      : [];
    setColors(colorOption);
    setImages(images ? images : []);
  }, [
    name,
    description,
    code,
    price,
    status,
    subCategory,
    detail,
    size,
    materials,
    colors,
    images,
  ]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      const data = await subCategoryAdminApi.getAll();
      const options = data.map((subCate) => ({
        value: subCate.id,
        label: subCate.name,
      }));
      setSubCategories(options);
    };

    const fetchMaterials = async () => {
      const data = await materialAdminApi.getAll();
      const options = data.map((material) => ({
        value: material.id,
        label: material.name,
      }));
      setListMaterial(options);
    };

    const fetchColors = async () => {
      const data = await colorAdminApi.getAll();
      const options = data.map((color) => ({
        value: color.id,
        label: color.name,
      }));
      setListColor(options);
    };

    fetchMaterials();
    fetchColors();
    fetchSubcategories();
  }, []);

  const handleOnChange = (e, editor) => {
    const data = editor.getData();
    setDetail(data);
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/admin/product");
  };

  const handleListMaterialChange = (e) => {
    setMaterials(e);
  };

  const handleListColorChange = (e) => {
    setColors(e);
  };

  const handleImagesChange = (e) => {
    const listImg = [];
    listImg.push(e.target.files);
    Object.values(listImg[0]).map((img) => {
      setImages((x) => [...x, img]);
      setPreview((x) => [...x, img]);
    });
  };

  const handleRemoveImage = (data) => {
    const index = data.target.value;
    const temp = [...preview];
    const tempImage = [...getImages];
    temp.splice(index, 1);
    tempImage.splice(
      tempImage.indexOf((img) => !temp.includes(img)),
      1
    );

    setPreview(temp);
    setImages(tempImage);
  };

  const handleRemoveExistedImage = (data) => {
    const id = data.target.value;
    const tempImage = [...getImages];
    tempImage.forEach((img, index) => {
      if (img.id === parseInt(id)) tempImage.splice(index, 1);
    });
    setImages(tempImage);
    try {
      imageAdminApi.remove(id);
      enqueueSnackbar("Xoá ảnh thành công", {
        variant: "success",
      });
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      product: {
        code: getCode,
        name: getName,
        description: getDescription,
        price: getPrice,
        status: getStatus,
        subCategoryId: getSubCategory,
      },
      productDetail: {
        detail: getDetail,
        size: getSize,
        materialIds: getMaterials,
        colorIds: getColors,
      },
      uploadImages: getImages,
    });
  };
  return (
    <Box component="form" onSubmit={onSubmit}>
      <Grid container direction="row" spacing={6}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={3} direction="row">
            <TextField
              name="name"
              label="Tên"
              value={getName}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              name="code"
              label="Mã sản phẩm"
              value={getCode}
              onChange={(e) => SetCode(e.target.value)}
              required
              disabled={button === "Sửa" ? true : false}
            />
            <TextField
              name="price"
              label="Giá"
              value={getPrice}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={3} direction="column">
            <FormLabel id="demo-row-radio-buttons-group-label">
              Sản phẩm còn hàng?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={getStatus}
              onChange={(e) => setStatus(e.target.value)}
            >
              <FormControlLabel value="1" control={<Radio />} label="Có" />
              <FormControlLabel value="0" control={<Radio />} label="Không" />
            </RadioGroup>
            <TextField
              name="size"
              label="Kích thước"
              style={{ width: "500px" }}
              value={getSize}
              onChange={(e) => setSize(e.target.value)}
              required
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={3} direction="row">
            <Stack direction="column">
              <Typography variant="h7" component="h4">
                Chọn tiểu mục
              </Typography>
              <Select
                options={subCategories}
                className="basic-single"
                classNamePrefix="select"
                isSearchable="true"
                onChange={(e) => setSubCategory(e.value)}
                name="subCateId"
                value={
                  !isEmpty(subCategories)
                    ? subCategories.filter((c) => c.value === getSubCategory)
                    : ""
                }
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "300px",
                  }),
                }}
              />
            </Stack>
            <Stack direction="column">
              <Typography variant="h7" component="h4">
                Chọn chất liệu
              </Typography>
              <Select
                options={listMaterial}
                isMulti
                className="basic-multiple-select"
                classNamePrefix="select"
                isSearchable="true"
                onChange={handleListMaterialChange}
                name="materials"
                value={getMaterials}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "300px",
                  }),
                }}
              />
            </Stack>
            <Stack direction="column">
              <Typography variant="h7" component="h4">
                Chọn màu
              </Typography>
              <Select
                options={listColor}
                isMulti
                className="basic-multiple-select"
                classNamePrefix="select"
                isSearchable="true"
                onChange={handleListColorChange}
                name="colors"
                value={getColors}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "300px",
                  }),
                }}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            label="Mô tả"
            value={getDescription}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "950px" }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <CKEditor
            editor={ClassicEditor}
            name="detail"
            data={getDetail}
            onChange={handleOnChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={1} direction="row">
            {preview &&
              preview.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 300 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={!item ? null : URL.createObjectURL(item)}
                    alt="green iguana"
                  />
                  <CardActions>
                    <Button
                      size="small"
                      color="error"
                      value={index}
                      onClick={handleRemoveImage}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              ))}
            {images &&
              getImages.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 300 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={
                      item.imageUrl
                        ? productImagePath + code + "/" + item.imageUrl
                        : ""
                    }
                    alt="preview"
                  />
                  <CardActions>
                    <Button
                      size="small"
                      color="error"
                      value={item.id}
                      onClick={handleRemoveExistedImage}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              ))}
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <Button variant="contained" component="label" color="secondary">
            Up ảnh
            <input
              name="images"
              hidden
              onChange={handleImagesChange}
              accept="image/*"
              multiple
              type="file"
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={3} direction="row">
            <Button type="submit" variant="contained" color="success">
              {button}
            </Button>
            <Button onClick={handleBack} variant="outlined">
              Trở về
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
};
