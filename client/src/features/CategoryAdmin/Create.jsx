import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import categoryAdminApi from "../../api/CategoryAdminApi";
import InputField from "../../components/FormControl/InputField";

const CreateCategory = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const schema = yup.object().shape({
    name: yup.string().required("Tên không được bỏ trống"),
  });

  const form = useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await categoryAdminApi.add(data);
      enqueueSnackbar("Tạo danh mục thành công!", { variant: "success" });
      navigate("/admin/category");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
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
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Tạo danh mục
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <InputField name="name" label="Tên" />
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={3} direction="row">
                <Button type="submit" variant="contained" color="success">
                  Tạo
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

export default CreateCategory;
