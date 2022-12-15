import { Dehaze } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import StorageKeys from "../../configs/storageKey";
import Categories from "../../features/Categories/Categories";

function Navbar(props) {
  const [isMobileToggle, setMobileToggle] = useState(false);
  const isLoggedIn = () => {
    if (localStorage.getItem(StorageKeys.TOKEN) !== null) return true;
    else return false;
  };
  const isAdmin = () => {
    if (localStorage.getItem(StorageKeys.ROLE) === "Admin") return true;
    else return false;
  };

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

              {isLoggedIn() ? (
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
              ) : (
                <>
                  <li>
                    <Link to="/register">Đăng ký</Link>
                  </li>
                  <li>
                    <Link to="/login">Đăng nhập</Link>
                  </li>
                </>
              )}
              {isAdmin() ? (
                <li>
                  <Link to="/admin/dashboard">Dashboard</Link>
                </li>
              ) : null}
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
