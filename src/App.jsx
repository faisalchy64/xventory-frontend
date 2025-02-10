import { Routes, Route } from "react-router";
import Main from "./layouts/Main";

export default function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/products" element={<h1>Products</h1>} />
      </Route>
    </Routes>
  );
}
