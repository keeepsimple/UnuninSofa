import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import "./style.css";

export const Footer = () => {
  return (
    <Box
      sx={{
        minHeight: 300,
        backgroundColor: "#C0C0C0",
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container>
          <Grid item xs={12} md={4} lg={3}>
            <img className="footer-logo" alt="logo" src={logo} />
          </Grid>
          <Grid
            container
            className="policy"
            direction="row"
            xs={12}
            md={4}
            lg={3}
          >
            <Stack spacing={2}>
              <Link to="#">
                <Typography>GIAO HÀNG</Typography>
              </Link>
              <Link to="#">
                <Typography>BẢO HÀNH</Typography>
              </Link>
              <Link to="#">
                <Typography>BẢO DƯỠNG</Typography>
              </Link>
              <Link to="#">
                <Typography>FAQ</Typography>
              </Link>
              <Link to="#">
                <Typography>CỬA HÀNG</Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid
            container
            className="policy"
            direction="row"
            xs={12}
            md={4}
            lg={3}
          >
            <Stack spacing={2}>
              <Link to="#">
                <Typography>VỀ UNUNIN SOFA</Typography>
              </Link>
              <Link to="#">
                <Typography>GIẢI THƯỞNG</Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid
            container
            className="policy"
            direction="column"
            xs={12}
            md={4}
            lg={3}
          >
            <Typography
              style={{
                fontSize: 13,
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Tìm chúng tôi
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link to="#">
                <FacebookIcon />
              </Link>
              <Link to="#">
                <TwitterIcon />
              </Link>
              <Link to="#">
                <YouTubeIcon />
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
