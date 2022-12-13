import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import categoryAdminApi from "../../api/CategoryAdminApi";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import InputField from "../../components/FormControl/InputField";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 6,
};

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
      navigate(0);
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return (
    <Modal
      open={props.open}
      onClose={props.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Box sx={style}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                  Tạo danh mục
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputField name="name" label="Tên" />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="success">
                  Tạo
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default CreateCategory;
