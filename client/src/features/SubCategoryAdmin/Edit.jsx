import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import categoryAdminApi from "../../api/CategoryAdminApi";
import subCategoryAdminApi from "../../api/SubCategoryAdminApi";
import { baseImagePath } from "../../configs/serverUrl";

const EditSubCategory = () => {
  const match = useParams();
  const id = match.id;
  const { enqueueSnackbar } = useSnackbar();
  const [subCategory, setSubCategory] = useState({});
  const [addData, setAddData] = useState("");
  const [getCategory, setCategory] = useState("");
  const [categories, setCategories] = useState({});
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const handleOnChange = (e, editor) => {
    const data = editor.getData();
    setAddData(data);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await categoryAdminApi.getAll();
      const options = data.map((cate) => ({
        value: cate.id,
        label: cate.name,
      }));
      setCategories(options);
    };

    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchSubCategory = async () => {
      const data = await subCategoryAdminApi.get(id);
      setSubCategory(data);
      setName(data.name);
      setCategory(data.categoryId);
    };

    fetchSubCategory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: subCategory.id,
      description: addData,
      name: name,
      imageUrl: !image ? subCategory.imageUrl : image,
      categoryId: getCategory,
    };

    try {
      await subCategoryAdminApi.update(data);
      enqueueSnackbar("Tạo danh mục thành công!", { variant: "success" });
      navigate("/admin/subcategory");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleNameChange = (e) => {
    const data = e.target.value;
    if (data === "") {
      enqueueSnackbar("Tên không được bỏ trống", { variant: "error" });
    }
    setName(data);
  };

  return (
    <form>
      <Grid
        alignItems="center"
        direction="column"
        justifyContent="center"
        container
        spacing={6}
      >
        <Grid item xs={12} />
        <Grid item xs={12}>
          <TextField
            label="Tên"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required="required"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" component="h3">
            Chọn danh mục
          </Typography>
          <Select
            options={categories}
            className="basic-single"
            classNamePrefix="select"
            isSearchable="true"
            value={
              !isEmpty(categories)
                ? categories.filter((c) => c.value === getCategory)
                : ""
            }
            onChange={(e) => setCategory(e.value)}
            name="categoryId"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "300px",
              }),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <CKEditor
            editor={ClassicEditor}
            id="description"
            name="description"
            data={!isEmpty(subCategory) ? subCategory.description : ""}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={6}>
          {image && (
            <div>
              <img
                alt="not found"
                style={{ width: 500, height: 300 }}
                src={URL.createObjectURL(image)}
              />
            </div>
          )}
          {!image && (
            <div>
              <img
                alt="not found"
                style={{ width: 500, height: 300 }}
                src={
                  !isEmpty(subCategory)
                    ? baseImagePath + "/SubCategory/" + subCategory.imageUrl
                    : ""
                }
              />
            </div>
          )}
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" component="label" color="secondary">
            Up ảnh
            <input
              name="imageUrl"
              id="imageUrl"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
              type="file"
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={3} direction="row">
            <Button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              variant="contained"
            >
              Sửa
            </Button>
            <Button onClick={handleBack} variant="outlined">
              Trở về
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditSubCategory;
