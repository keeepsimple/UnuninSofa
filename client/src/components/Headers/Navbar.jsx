import { Dehaze } from "@mui/icons-material";
import React from "react";

function Navbar(props) {
  return (
    <>
      <header className="navbar">
        <div className="container d-flex">
          <div className="categories f-flex">
            <Dehaze />
            <h4>Danh mục sản phẩm</h4>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
