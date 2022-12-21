import React from "react";
import Slider from "react-slick";
import { productImagePath } from "../../configs/serverUrl";

export const ImageGallery = ({ images, code }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {images.map((img) => (
        <div key={img.id}>
          <img
            className="imageGallery"
            src={productImagePath + code + "/" + img.imageUrl}
            alt={img.imageUrl}
          />
        </div>
      ))}
    </Slider>
  );
};
