import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Button,
  Grid,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Markup } from "interweave";
import React, { useEffect, useState } from "react";
import ConfirmAddToCart from "./ConfirmAddToCart";
import { RenderDefaultText } from "./RenderDefaultText";

export const Detail = ({ product, detail, addToCart, image }) => {
  const [materialAlignment, setMaterialAlignment] = useState("");
  const [colorAlignment, setColorAlignment] = useState("");
  const [materialSelect, setMaterialSelect] = useState(0);
  const [colorSelect, setColorSelect] = useState(0);
  const [isReadDetailMore, setIsReadDetailMore] = useState(true);
  const [isReadSizeMore, setIsReadSizeMore] = useState(true);
  const [show, setShow] = useState(false);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    setMaterialSelect(detail.materials ? detail.materials[0].name : 0);
    setMaterialAlignment(detail.materials ? detail.materials[0].name : null);
    setColorSelect(detail.colors ? detail.colors[0].name : 0);
    setColorAlignment(detail.colors ? detail.colors[0].name : null);
    setRate(product.rate > 0 ? product.rate : 0);
  }, [detail, product.rate]);

  const handleBuy = () => {
    const productItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      code: product.code,
      salePrice: product.salePrice,
      material: materialSelect,
      color: colorSelect,
      image: image,
    };

    addToCart(productItem);
    setShow(true);
  };

  const handleToggleMaterial = (e, newAlignment) => {
    if (newAlignment !== null) {
      setMaterialAlignment(newAlignment);
    }
  };

  const handleToggleColor = (e, newAlignment) => {
    if (newAlignment !== null) {
      setColorAlignment(newAlignment);
    }
  };

  const handleMaterialChange = (e) => {
    const data = e.target.value;
    setMaterialSelect(data);
  };

  const handleColorChange = (e) => {
    const data = e.target.value;
    setColorSelect(data);
  };

  const renderDetailText = (text) => {
    return text === null ? (
      ""
    ) : isReadDetailMore ? (
      ""
    ) : (
      <Markup content={text} />
    );
  };

  const renderSizeText = (text) => {
    return text === null ? (
      ""
    ) : isReadSizeMore ? (
      ""
    ) : (
      <Markup content={"Kích thước ghế 3 chỗ (W-D-H): " + text} />
    );
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography style={{ fontSize: 30, fontWeight: 200 }}>
          {product.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography style={{ fontSize: 15, fontWeight: 200 }}>
          {product.description}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="legend">
          Đánh giá trong {product.rateCount} lượt
        </Typography>
        <Rating
          name="read-only"
          aria-label={product.rate + " Stars"}
          value={rate}
          readOnly
          precision={0.5}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>Chất liệu</Typography>
        <ToggleButtonGroup
          color="error"
          exclusive
          size="large"
          fullWidth
          value={materialAlignment}
          onChange={handleToggleMaterial}
          aria-label="Platform"
        >
          {detail.materials &&
            detail.materials.map((material) => (
              <ToggleButton
                key={material.id}
                onClick={handleMaterialChange}
                value={material.name}
              >
                {material.name}
              </ToggleButton>
            ))}
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12}>
        <Typography>Màu</Typography>
        <ToggleButtonGroup
          color="error"
          exclusive
          size="medium"
          fullWidth
          value={colorAlignment}
          onChange={handleToggleColor}
          aria-label="Platform"
        >
          {detail.colors &&
            detail.colors.map((color) => (
              <ToggleButton
                key={color.id}
                onClick={handleColorChange}
                value={color.name}
              >
                {color.name}
              </ToggleButton>
            ))}
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="column" spacing={3}>
          <p style={{ fontSize: 20, color: "red", fontWeight: 500 }}>
            {" "}
            Giá :{" "}
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.price)}
          </p>
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "black" }}
            onClick={handleBuy}
          >
            Mua ngay
          </Button>
        </Stack>
      </Grid>
      <Grid className="renderText" item xs={12}>
        <Stack direction="row" spacing={4}>
          <Typography style={{ fontSize: 25, fontWeight: 200 }}>
            Chi tiết sản phẩm
          </Typography>
          <span
            onClick={(e) => setIsReadDetailMore(!isReadDetailMore)}
            className="hideShow"
          >
            {isReadDetailMore ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </span>
        </Stack>
        {!detail.detail
          ? ""
          : detail.detail
          ? renderDetailText(detail.detail)
          : ""}
      </Grid>
      <Grid className="renderText" item xs={12}>
        <Stack direction="row" spacing={4}>
          <Typography style={{ fontSize: 25, fontWeight: 200 }}>
            Kích thước
          </Typography>
          <span
            onClick={(e) => setIsReadSizeMore(!isReadSizeMore)}
            className="hideShow"
          >
            {isReadSizeMore ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </span>
        </Stack>
        {!detail.size ? "" : detail.size ? renderSizeText(detail.size) : ""}
      </Grid>
      <RenderDefaultText />
      <ConfirmAddToCart open={show} close={() => setShow(false)} />
    </Grid>
  );
};
