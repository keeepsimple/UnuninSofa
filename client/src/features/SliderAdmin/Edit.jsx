import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Grid, Stack, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import sliderAdminApi from "../../api/SliderAdminApi";
import { isEmpty } from "lodash";
import { sliderImagePath } from "../../configs/serverUrl";

const EditSlider = () => {
  const match = useParams();
  const id = match.id;
  const { enqueueSnackbar } = useSnackbar();
  const [slider, setSlider] = useState({});
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSliders = async () => {
      const data = await sliderAdminApi.get(id);
      setName(data.name);
      setLink(data.link);
      setSlider(data);
    };
    fetchSliders();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: slider.id,
      name: name,
      imageUrl: !image ? slider.imageUrl : image,
      link: link,
    };

    try {
      await sliderAdminApi.update(data);
      enqueueSnackbar("Sửa ảnh slider thành công!", { variant: "success" });
      navigate("/admin/slider");
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  const handleNameChange = (e) => {
    const data = e.target.value;
    if (data === "") {
      enqueueSnackbar("Tên không được bỏ trống", { variant: "error" });
    }
    setName(data);
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
            value={name}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Gắn link lên ảnh"
            id="link"
            name="link"
            value={link}
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
          {!image && (
            <div>
              <img
                alt="not found"
                width={"500px"}
                src={!isEmpty(slider) ? sliderImagePath + slider.imageUrl : ""}
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

export default EditSlider;
