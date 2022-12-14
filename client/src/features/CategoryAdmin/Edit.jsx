import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import categoryAdminApi from "../../api/CategoryAdminApi";
import InputField from "../../components/FormControl/InputField";
import isEmpty from "lodash/isEmpty";

const EditCategory = (props) => {
  const match = useParams();
  const id = match.cateId;
  const [category, setCategory] = useState({});
  const [name, setName] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const schema = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    // .required("Tên không được bỏ trống"),
  });

  const form = useForm({
    defaultValues: {
      id: "",
      name: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchCategory = async () => {
      const cate = await categoryAdminApi.get(id);
      setCategory(cate);
      setName(cate.name);
    };

    fetchCategory();
  }, [id]);
  const navigate = useNavigate();
  const onSubmit = async () => {
    const update = {
      id,
      name,
    };

    try {
      await categoryAdminApi.update(update);
      enqueueSnackbar("Sửa danh mục thành công!", { variant: "success" });
      navigate(-1);
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  const handleChange = (e) => {
    const data = e.target.value;
    setName(data);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Box>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={6}
          >
            <Grid item xs={12} />
            <Grid item xs={12}>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Sửa danh mục
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <InputField
                name="id"
                value={!isEmpty(category) ? category.id : ""}
                type="hidden"
              />
              <InputField
                fullWidth
                name="name"
                label="Tên"
                value={!isEmpty(category) ? name : ""}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={3} direction="row">
                <Button type="submit" variant="contained" color="primary">
                  Sửa
                </Button>
                <Button onClick={handleBack} variant="outlined">
                  Trở về
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </form>
    </FormProvider>
  );
};

export default EditCategory;
