import { Dehaze } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../../features/Categories/Categories";

function Navbar(props) {
  const [isMobileToggle, setMobileToggle] = useState(false);
  function handleClickToggleModible() {
    return setMobileToggle(!isMobileToggle);
  }
  return (
    <>
      <header className="navbar">
        <div className="container-nav d-flex">
          <div className="categories d-flex"></div>
          <div className="navlink">
            <ul
              className={
                isMobileToggle
                  ? "nav-links-MobileMenu"
                  : "link f-flex capitalize"
              }
              onClick={() => setMobileToggle(false)}
            >
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="#">Danh mục sản phẩm</Link>
                <Categories />
              </li>
              <li>
                <Link to="/users">Tài khoản</Link>
              </li>
              <li>
                <Link to="/track">Theo dõi đơn hàng</Link>
              </li>
              <li>
                <Link to="/contact">Liên hệ</Link>
              </li>
            </ul>
            <button
              className="toggle"
              onClick={() => handleClickToggleModible()}
            >
              {isMobileToggle ? (
                <CloseIcon className="close home-bth" />
              ) : (
                <Dehaze className="open" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
