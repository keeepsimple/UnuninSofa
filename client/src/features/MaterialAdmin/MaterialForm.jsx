import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MaterialForm = (props) => {
  const { name, description, title, button, handleSubmit } = props;
  const [getName, setName] = useState("");
  const [getDescription, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setName(name ? name : "");
    setDescription(description ? description : "");
  }, [name, description]);

  const handleBack = () => {
    navigate("/admin/material");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ name: getName, description: getDescription });
  };

  return (
    <Box component="form" onSubmit={onSubmit}>
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
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Tên"
            value={getName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            label="Mô tả"
            value={getDescription}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
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
      </Grid>
    </Box>
  );
};

export default MaterialForm;
