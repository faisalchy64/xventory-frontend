import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Auth() {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
