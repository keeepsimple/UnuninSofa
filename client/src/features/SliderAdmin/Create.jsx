import { Button, Grid, Stack, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sliderAdminApi from "../../api/SliderAdminApi";

const CreateSlider = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      imageUrl: image,
      link: link,
    };

    try {
      await sliderAdminApi.add(data);
      enqueueSnackbar("Tạo ảnh slider thành công!", { variant: "success" });
      navigate("/admin/slider");
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
          <TextField
            label="Gắn link lên ảnh"
            id="link"
            name="link"
            onChange={(e) => setLink(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          {image && (
            <div>
              <img
                alt="not found"
                width={"500px"}
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
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
              multiple
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

export default CreateSlider;
