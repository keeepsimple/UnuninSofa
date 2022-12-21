import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ImageThumbnail } from "./ImageThumbnail";

export const ListProduct = ({ products }) => {
  return (
    <Grid
      component={Paper}
      style={{
        paddingTop: 3,
        paddingBottom: 6,
      }}
      container
      alignItems="center"
      justifyItems="center"
      elevation={4}
      direction="row"
      spacing={6}
    >
      {products &&
        products.map((product) => (
          <Grid key={product.id} item xs={4}>
            <Card
              component={Link}
              to={"/product/" + product.id}
              sx={{ maxWidth: 500 }}
            >
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
          </Grid>
        ))}
    </Grid>
  );
};
