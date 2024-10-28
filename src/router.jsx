import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import Products from "./pages/Products";

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
    ],
  },
]);

export default router;
