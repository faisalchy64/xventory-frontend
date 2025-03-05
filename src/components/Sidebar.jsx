import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { X } from "lucide-react";
import dashboard from "../assets/dashboard.png";
import products from "../assets/products.png";
import create from "../assets/create.png";
import orders from "../assets/orders.png";
import users from "../assets/users.png";
import purchase from "../assets/purchase.png";
import profile from "../assets/profile.png";

export default function Sidebar({ open, setOpen }) {
  const { pathname } = useLocation();
  const uris = [
    {
      id: 1,
      path: "/dashboard",
      name: "Dashboard",
      icon: dashboard,
    },
    {
      id: 2,
      path: "/dashboard/manage-products",
      name: "Manage Products",
      icon: products,
    },
    {
      id: 3,
      path: "/dashboard/create-product",
      name: "Create Product",
      icon: create,
    },
    {
      id: 4,
      path: "/dashboard/manage-orders",
      name: "Manage Orders",
      icon: orders,
    },
    {
      id: 5,
      path: "/dashboard/manage-users",
      name: "Manage Users",
      icon: users,
    },
    {
      id: 6,
      path: "/dashboard/purchase-history",
      name: "Purchase History",
      icon: purchase,
    },
    {
      id: 7,
      path: "/dashboard/profile",
      name: "Profile",
      icon: profile,
    },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  return (
    <aside
      className={`flex-shrink-0 lg:w-80 h-screen bg-gray-50 flex flex-col gap-5 fixed lg:static inset-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 px-3.5 py-5 z-[2000] transition-all duration-300 border-r`}
    >
      <div className="flex justify-between items-center">
        <h3 className="btn btn-ghost text-2xl font-bold text-gray-800">
          Dashboard
        </h3>
        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => setOpen(false)}
        >
          <X className="stroke-gray-500" />
        </button>
      </div>

      <div className="flex flex-col gap-2.5">
        {uris.map((uri) => (
          <Link
            key={uri.id}
            to={uri.path}
            className={`flex items-center gap-2.5 text-gray-500 ${
              uri.path === pathname && "text-white bg-primary"
            } hover:text-white hover:bg-primary px-3.5 py-2.5 rounded-md`}
          >
            <img src={uri.icon} alt="Icon" className="size-5" /> {uri.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
