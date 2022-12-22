import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import categoryAdminApi from "../../api/CategoryAdminApi";
import subCategoryAdminApi from "../../api/SubCategoryAdminApi";

const CreateSubCategory = () => {
  const { enqueueSnackbar } = useSnackbar();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      description: addData,
      name: name,
      imageUrl: image,
      categoryId: getCategory,
    };
    console.log(data);
    try {
      await subCategoryAdminApi.add(data);
      enqueueSnackbar("Tạo danh mục thành công!", { variant: "success" });
      navigate("/admin/subcategory");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  const handleBack = () => {
    navigate(-1);
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
            onChange={(e) => setName(e.target.value)}
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
            data={addData}
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
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" component="label" color="secondary">
            Up ảnh
            <input
              name="imageUrl"
              id="imageUrl"
              hidden
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
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
              Tạo
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

export default CreateSubCategory;
