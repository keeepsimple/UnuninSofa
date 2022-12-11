import { Dehaze } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                    backgroundColor: isActive ? "#ff014f" : "#fff",
                  })}
                  to="/"
                >
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <Link to="#">Danh mục sản phẩm</Link>
                <Categories />
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                    backgroundColor: isActive ? "#ff014f" : "#fff",
                  })}
                  to="/users"
                >
                  Tài khoản
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                    backgroundColor: isActive ? "#ff014f" : "#fff",
                  })}
                  to="/track"
                >
                  Theo dõi đơn hàng
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                    backgroundColor: isActive ? "#ff014f" : "#fff",
                  })}
                  to="/contact"
                >
                  Liên hệ
                </NavLink>
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
