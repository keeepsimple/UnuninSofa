import { Button, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import categoryAdminApi from "../../api/CategoryAdminApi";
import InputField from "../../components/FormControl/InputField";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 15,
};

const EditCategory = (props) => {
  const { id, open, close, name } = props;
  const { value, SetValue } = useState(name);
  const { enqueueSnackbar } = useSnackbar();
  const schema = yup.object().shape({
    name: yup.string().required("Tên không được bỏ trống"),
  });

  const form = useForm({
    defaultValues: {
      id: "",
      name: "",
    },
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const update = {
      ...data,
      id,
    };
    try {
      await categoryAdminApi.update(update);
      enqueueSnackbar("Tạo danh mục thành công!", { variant: "success" });
      navigate(0);
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  const handleOnChange = () => {};
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Box sx={style}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                  Sửa danh mục
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  name="name"
                  label="Tên"
                  value={value}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Sửa
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default EditCategory;
