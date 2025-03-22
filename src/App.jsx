import { Routes, Route } from "react-router";
import Main from "./layouts/Main";
import Auth from "./layouts/Auth";
import Dashboard from "./layouts/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WitoutAuthRoute from "./components/WithoutAuthRoute";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AuthRoute from "./components/AuthRoute";
import Root from "./pages/Root";
import ManageProducts from "./pages/ManageProducts";
import ManageOrders from "./pages/ManageOrders";
import ManageUsers from "./pages/ManageUsers";
import PurchaseHistory from "./pages/PurchaseHistory";
import CreateProduct from "./pages/CreateProduct";
import Profile from "./pages/Profile";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";

export default function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route element={<WitoutAuthRoute />}>
        <Route element={<Auth />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
      </Route>

      <Route element={<AuthRoute />}>
        <Route element={<Dashboard />}>
          <Route path="/dashboard" element={<Root />} />
          <Route
            path="/dashboard/manage-products"
            element={<ManageProducts />}
          />
          <Route path="/dashboard/manage-orders" element={<ManageOrders />} />
          <Route
            path="/dashboard/purchase-history"
            element={<PurchaseHistory />}
          />
          <Route path="/dashboard/create-product" element={<CreateProduct />} />
          <Route path="/dashboard/profile" element={<Profile />} />

          <Route path="/dashboard/manage-users" element={<ManageUsers />} />
        </Route>

        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentFailed />} />
      </Route>
    </Routes>
  );
}
