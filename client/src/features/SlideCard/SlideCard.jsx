import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import imageApi from "../../api/ImageApi";
import { sliderImagePath } from "../../configs/serverUrl";

function SlideCard(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  const [sliders, setSlider] = useState([]);
  useEffect(() => {
    const fetchSliders = async () => {
      const list = await imageApi.getSliders();
      setSlider(list);
    };

    fetchSliders();
  }, []);
  return (
    <>
      <Slider {...settings}>
        {sliders.map((slider) => (
          <div className="box" key={slider.id}>
            <div className="left">
              <img src={sliderImagePath + slider.imageUrl} alt={slider.name} />
            </div>
            <div className="right"></div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SlideCard;
