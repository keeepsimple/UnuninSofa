import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./components/Cart";
import AdminLayout from "./components/Layout/AdminLayout";
import UserLayout from "./components/Layout/UserLayout";
import UserLoginLayout from "./components/Layout/UserLoginLayout";
import NoMatch from "./components/NoMatch/NoMatch";
import StorageKeys from "./configs/storageKey";
import CategoryAdmin from "./features/CategoryAdmin";
import CreateCategory from "./features/CategoryAdmin/Create";
import EditCategory from "./features/CategoryAdmin/Edit";
import ColorFeatures from "./features/ColorAdmin";
import CreateColor from "./features/ColorAdmin/Create";
import EditColor from "./features/ColorAdmin/Edit";
import Login from "./features/Login";
import MaterialFeatures from "./features/MaterialAdmin";
import CreateMaterial from "./features/MaterialAdmin/Create";
import EditMaterial from "./features/MaterialAdmin/Edit";
import OrderFeatures from "./features/OrderAdmin";
import EditOrder from "./features/OrderAdmin/Edit";
import OrderConfirm from "./features/OrderConfirm";
import { ByCreditCard } from "./features/Payment/ByCreditCard";
import { ByTransfer } from "./features/Payment/ByTransfer";
import { PaySuccess } from "./features/Payment/PaySuccess";
import ProductAdminFeatures from "./features/ProductAdmin";
import CreateProduct from "./features/ProductAdmin/Create";
import EditProduct from "./features/ProductAdmin/Edit";
import { ProductDetailFeatures } from "./features/ProductDetail";
import Register from "./features/Register";
import { RevenueReport } from "./features/RevenueReport";
import SliderFeatures from "./features/SliderAdmin";
import CreateSlider from "./features/SliderAdmin/Create";
import EditSlider from "./features/SliderAdmin/Edit";
import SubCategoryFeature from "./features/SubCategory/index";
import SubCategoryAdmin from "./features/SubCategoryAdmin";
import CreateSubCategory from "./features/SubCategoryAdmin/Create";
import EditSubCategory from "./features/SubCategoryAdmin/Edit";
import { UserAdminFeatures } from "./features/UserAdmin";
import { EditUser } from "./features/UserAdmin/Edit";
import { UserDetailFreature } from "./features/UserDetail";
import { OrderDetail } from "./features/UserDetail/OrderDetail";
import DashBoardMain from "./pages/Dashboard";
import Home from "./pages/Home/Home";

const fetchCartFromLocalStorage = JSON.parse(
  localStorage.getItem(StorageKeys.CART) || "[]"
);

function App() {
  const admin = "Admin";
  const [cartItem, setCartItem] = useState(fetchCartFromLocalStorage);

  const addToCart = (product) => {
    const productExist = cartItem.find(
      (item) =>
        item.id === product.id &&
        item.material === product.material &&
        item.color === product.color
    );
    if (productExist) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id &&
            item.material === product.material &&
            item.color === product.color
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (product) => {
    const productExist = cartItem.find(
      (item) =>
        item.id === product.id &&
        item.material === product.material &&
        item.color === product.color
    );
    if (productExist.quantity !== 1) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id &&
            item.material === product.material &&
            item.color === product.color
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
      localStorage.setItem(StorageKeys.CART, JSON.stringify(cartItem));
    }
  };

  const deleteItem = (product) => {
    const temp = [...cartItem];
    temp.forEach((item, index) => {
      if (item.id === product.id && item.material === product.material && item.color === product.color) {
        temp.splice(index, 1);
      }
    });
    setCartItem([...temp]);
    localStorage.setItem(StorageKeys.CART, JSON.stringify(cartItem));
  }

  useEffect(() => {
    localStorage.setItem(StorageKeys.CART, JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <>
      <Routes>
        <Route element={<UserLayout cartItem={cartItem} />}>
          <Route path="/" element={<Home />} />
          <Route
            path="subcategory/:subcateId"
            element={<SubCategoryFeature />}
          />
          <Route
            path="product/:productId"
            element={<ProductDetailFeatures addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItem={cartItem}
                addToCart={addToCart}
                decreaseQuantity={decreaseQuantity}
                deleteItem={deleteItem}
              />
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route element={<UserLoginLayout cartItem={cartItem} />}>
          <Route path="/user" element={<UserDetailFreature />} />
          <Route path="/user/order/:id" element={<OrderDetail />} />
          <Route
            path="/order-confirm"
            element={<OrderConfirm cartItem={cartItem} />}
          />
          <Route
            path="/transfer"
            element={<ByTransfer cartItem={cartItem} />}
          />
          <Route path="/credit-card" element={<ByCreditCard cartItem={cartItem} />} />
          <Route path="/paysuccess" element={<PaySuccess cartItem={cartItem} />} />
        </Route>
        <Route element={<AdminLayout allowedRole={admin} />}>
          <Route path="/admin/dashboard" element={<DashBoardMain />} />
          <Route path="/admin/category" element={<CategoryAdmin />} />
          <Route
            path="/admin/category/edit/:cateId"
            element={<EditCategory />}
          />
          <Route path="/admin/category/create" element={<CreateCategory />} />
          <Route path="/admin/subcategory" element={<SubCategoryAdmin />} />
          <Route
            path="/admin/subcategory/create"
            element={<CreateSubCategory />}
          />
          <Route
            path="/admin/subcategory/edit/:id"
            element={<EditSubCategory />}
          />
          <Route path="/admin/product" element={<ProductAdminFeatures />} />
          <Route path="/admin/product/create" element={<CreateProduct />} />
          <Route path="/admin/product/edit/:id" element={<EditProduct />} />
          <Route path="/admin/slider" element={<SliderFeatures />} />
          <Route path="/admin/slider/create" element={<CreateSlider />} />
          <Route path="/admin/slider/edit/:id" element={<EditSlider />} />
          <Route path="/admin/material" element={<MaterialFeatures />} />
          <Route path="/admin/material/create" element={<CreateMaterial />} />
          <Route path="/admin/material/edit/:id" element={<EditMaterial />} />
          <Route path="/admin/color" element={<ColorFeatures />} />
          <Route path="/admin/color/create" element={<CreateColor />} />
          <Route path="/admin/color/edit/:id" element={<EditColor />} />
          <Route path="/admin/order" element={<OrderFeatures />} />
          <Route path="/admin/order/edit/:id" element={<EditOrder />} />
          <Route path="/admin/report" element={<RevenueReport />} />
          <Route path="/admin/users" element={<UserAdminFeatures />} />
          <Route path="/admin/users/edit/:id" element={<EditUser />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
