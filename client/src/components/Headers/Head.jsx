import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DisplaySearchProduct } from "./DisplaySearchProduct";

function Head() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="head">
        <div className="container d-flex">
          <div className="left row" style={{ paddingLeft: 20 }}>
            Hotline: 091909199 | Email: admin@ununinsofa.com
          </div>
          <div className="right row RText" style={{ paddingRight: 20 }}>
            <Link style={{ color: "white" }} onClick={() => setOpen(!open)}>
              <SearchIcon fontSize="small" sx={{ marginTop: 0.5 }} />
            </Link>
            <Link style={{ color: "white" }} to="/cart">
              <ShoppingCartIcon fontSize="small" />
            </Link>
          </div>
        </div>
      </section>
      <DisplaySearchProduct open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default Head;
