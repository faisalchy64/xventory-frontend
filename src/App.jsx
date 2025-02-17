import { Routes, Route } from "react-router";
import Main from "./layouts/Main";
import Dashboard from "./layouts/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Root from "./pages/Root";
import ManageProducts from "./pages/ManageProducts";
import ManageOrders from "./pages/ManageOrders";
import PurchaseHistory from "./pages/PurchaseHistory";

export default function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      <Route element={<Dashboard />}>
        <Route path="/dashboard" element={<Root />} />
        <Route path="/dashboard/manage-products" element={<ManageProducts />} />
        <Route path="/dashboard/manage-orders" element={<ManageOrders />} />
        <Route
          path="/dashboard/purchase-history"
          element={<PurchaseHistory />}
        />
      </Route>
    </Routes>
  );
}
