import { Routes, Route } from "react-router";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
}
