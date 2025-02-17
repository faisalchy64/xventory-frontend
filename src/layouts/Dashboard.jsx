import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <main className="w-full md:h-screen overflow-y-scroll">
        <Navbar setOpen={setOpen} />
        <Outlet />
      </main>
    </div>
  );
}
