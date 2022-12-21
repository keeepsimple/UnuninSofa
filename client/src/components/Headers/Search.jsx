import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";

function Search({ cartItem }) {
  return (
    <>
      <section className="navbar search">
        <div className="container c-flex">
          <div className="logo width">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="search-box f-flex">
            <input type="text" placeholder="Tìm kiếm thuiiiiiiiiiii" />
            <SearchIcon fontSize="large" sx={{ marginTop: 0.5 }} />
          </div>

          <div className="icon f-flex width">
            <div className="cart">
              <Link to="/cart">
                <ShoppingCartIcon className="icon-circle" />
                <span>{!cartItem ? 0 : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
