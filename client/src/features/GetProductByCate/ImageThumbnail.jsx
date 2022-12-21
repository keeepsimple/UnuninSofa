import { CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import imageApi from "../../api/ImageApi";
import { productImagePath } from "../../configs/serverUrl";

export const ImageThumbnail = ({ code, name }) => {
  const [image, setImage] = useState({});
  useEffect(() => {
    const fetchThumbnail = async () => {
      const data = await imageApi.getThumb(code);
      setImage(data);
    };
    fetchThumbnail();
  }, [code]);

  return (
    <CardMedia
      component="img"
      height="400"
      image={productImagePath + code + "/" + image.imageUrl}
      alt={name}
    />
  );
};
