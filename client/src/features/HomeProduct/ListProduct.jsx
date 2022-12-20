import {
  Card,
  CardActionArea,
  CardContent,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import productApi from "../../api/ProductApi";
import { ImageThumbnail } from "./ImageThumbnail";

export const ListProduct = ({ subId }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productApi.getBySubCate(subId);
      setProducts(data);
    };

    fetchProducts();
  }, [subId]);
  return (
    <Stack
      component={Paper}
      style={{ paddingTop: 3, paddingLeft: 25 }}
      elevation={6}
      direction="row"
      spacing={6}
    >
      {products.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 500 }}>
          <CardActionArea>
            <ImageThumbnail code={product.code} name={product.name} />
            <CardContent>
              <Stack direction="row" spacing={8}>
                <Stack direction="column" spacing={3}>
                  <Typography variant="h6" mt={2}>
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {product.code}
                  </Typography>
                </Stack>
                <Typography
                  style={{ paddingTop: 15 }}
                  variant="h6"
                  color="error"
                >
                  Giá:{" "}
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price)}
                </Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Stack>
  );
};
