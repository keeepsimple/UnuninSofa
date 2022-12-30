import RateReviewIcon from "@mui/icons-material/RateReview";
import { Button, CardActions, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Slider from "react-slick";
import StorageKeys from "../../configs/storageKey";
import { AddReviews } from "./AddReviews";

export const CustomerReviews = ({ listReviews, productId }) => {
  const [open, setOpen] = useState(false);
  const isAdmin =
    localStorage.getItem(StorageKeys.ROLE) === "Admin" ? true : false;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <AddReviews
        open={open}
        close={() => setOpen(false)}
        productId={productId}
      />
      <Button
        onClick={() => {
          setOpen(true);
        }}
        variant="outlined"
        color="warning"
      >
        <RateReviewIcon />
        Viết nhận xét
      </Button>
      <Slider {...settings}>
        {listReviews.length > 0 &&
          listReviews.map((review) => (
            <Card key={review.id} sx={{ minWidth: 275, minHeight: 150 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ paddingBottom: 5 }}
                >
                  {review.fullName}
                </Typography>

                <Rating
                  name="read-only"
                  value={review.totalRate}
                  readOnly
                  precision={0.5}
                />
                <Typography style={{ paddingTop: 5, fontSize: 16 }}>
                  {review.comment}
                </Typography>
              </CardContent>
              {isAdmin ? (
                <CardActions>
                  <Button size="small" color="error" variant="contained">
                    Delete
                  </Button>
                </CardActions>
              ) : (
                ""
              )}
            </Card>
          ))}
      </Slider>
    </>
  );
};
