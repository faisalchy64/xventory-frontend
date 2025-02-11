import { Routes, Route } from "react-router";
import Main from "./layouts/Main";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<h1>Products</h1>} />
      </Route>
    </Routes>
  );
}
