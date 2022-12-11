import React from "react";
import logo from "../../assets/images/logo/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Search(props) {
  window.addEventListener("scroll", () => {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <section className="search">
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
            <AccountCircleIcon className="icon-circle" />
            <div className="cart">
              <Link to="/cart">
                <ShoppingCartIcon className="icon-circle" />
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
