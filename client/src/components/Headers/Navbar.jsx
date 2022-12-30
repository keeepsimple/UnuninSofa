import { Dehaze } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
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
      <section className="search">
        <div className="container d-flex">
          <div className="left row"></div>
          <div className="logo width center row">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="right row RText"></div>
        </div>
      </section>
      <header className="navbar">
        <div className="container-nav d-flex">
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
                  className="link-item"
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
                    className="link-item"
                    style={({ isActive }) => ({
                      color: isActive ? "white" : "black",
                      backgroundColor: isActive ? "#ff014f" : "#fff",
                    })}
                    to="/user"
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
