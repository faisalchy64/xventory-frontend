import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Dashboard from "./layout/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminManageProducts from "./pages/AdminManageProducts";
import AdminManageOrders from "./pages/AdminManageOrders";
import AdminManageUsers from "./pages/AdminManageUsers";
import ManageProducts from "./pages/ManageProducts";
import ManageOrders from "./pages/ManageOrders";
import CreateProduct from "./pages/CreateProduct";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/admin-manage-products",
        element: <AdminManageProducts />,
      },
      {
        path: "/dashboard/admin-manage-orders",
        element: <AdminManageOrders />,
      },
      {
        path: "/dashboard/admin-manage-users",
        element: <AdminManageUsers />,
      },
      {
        path: "/dashboard/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/dashboard/manage-orders",
        element: <ManageOrders />,
      },
      {
        path: "/dashboard/create-product",
        element: <CreateProduct />,
      },
    ],
  },
]);

export default router;
