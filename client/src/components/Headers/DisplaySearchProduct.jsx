import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogContent,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import searchApi from "../../api/SearchApi";
import useDebounceCallback from "../SetDelay/SetDelay";
import { ProductImage } from "./ProductImage";

export const DisplaySearchProduct = ({ open, onClose }) => {
  const [searchString, setSearchString] = useState("");
  const [products, setProducts] = useState([]);
  const delay = useDebounceCallback(500);
  const handleSearchChange = (e) => {
    e.preventDefault();
    const data = e.target.value;
    delay(() => setSearchString(data.trim()));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await searchApi.search({
        searchString: `${searchString}`,
      });
      setProducts(data);
    };

    fetchProducts();
  }, [searchString]);

  const handleClose = () => {
    onClose(false);
    setProducts([]);
  };

  return (
    <Dialog maxWidth="lg" fullWidth onClose={handleClose} open={open}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Grid container>
          <Grid
            item
            style={{ justifyContent: "center", alignItems: "center" }}
            xs={12}
          >
            <TextField
              fullWidth
              variant="outlined"
              onChange={handleSearchChange}
              placeholder="Tìm kiếm..."
            />
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={12}>
            <Stack style={{ padding: 10 }} direction="column">
              {products.length > 0
                ? products.map((product) => (
                    <Card
                      component={Link}
                      to={"/product/" + product.id}
                      sx={{ maxWidth: 1200 }}
                      onClick={handleClose}
                    >
                      <CardActionArea>
                        <ProductImage code={product.code} name={product.name} />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {product.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))
                : ""}
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
};
