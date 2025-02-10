import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
