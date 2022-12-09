import { ShoppingCart } from "@mui/icons-material";
import React from "react";

function Head(props) {
  return (
    <>
      <section className="head">
        <div className="container d-flex">
          <div className="left row"></div>
          <div className="center row">
            <p className="sale-message">SIÊU KHUYẾN MÃI - SALE UP TO 70% OFF</p>
          </div>
          <div className="right row RText">
            <ShoppingCart />
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
