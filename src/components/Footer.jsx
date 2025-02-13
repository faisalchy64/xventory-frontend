import { Link } from "react-router";

export default function Footer() {
  const data = {
    explore: [
      {
        id: 1,
        path: "/",
        name: "Home",
      },
      {
        id: 2,
        path: "/products",
        name: "Products",
      },
      {
        id: 3,
        path: "/dashboard",
        name: "Dashboard",
      },
      {
        id: 4,
        path: "/about",
        name: "About",
      },
    ],
    support: [
      {
        id: 1,
        path: "/contact",
        name: "Contact",
      },
      {
        id: 2,
        path: "/help",
        name: "Help Center",
      },
      {
        id: 3,
        path: "/api",
        name: "Api Documentation",
      },
      {
        id: 4,
        path: "/system",
        name: "System Status",
      },
    ],
    legal: [
      {
        id: 1,
        path: "/privacy",
        name: "Privacy Policy",
      },
      {
        id: 2,
        path: "/terms",
        name: "Terms of Service",
      },
      {
        id: 3,
        path: "/cookie",
        name: "Cookie Policy",
      },
      {
        id: 4,
        path: "/data",
        name: "Data Policy",
      },
    ],
  };

  return (
    <footer className="bg-base-200">
      <div className="w-4/5 grid md:grid-cols-2 lg:grid-cols-4 gap-3.5 py-10 mx-auto">
        <article className="card card-compact">
          <div className="card-body">
            <Link to="/">
              <h3 className="logo text-2xl font-bold">Xventory</h3>
            </Link>

            <p className="text-gray-500">
              Start today with a free tier and see how our platform can make
              inventory management easy and efficient for your business.
            </p>
          </div>
        </article>

        <article className="card card-compact">
          <div className="card-body">
            <h3 className="text-lg font-bold text-gray-700">Explore</h3>

            <div className="flex flex-col gap-1.5">
              {data.explore.map(({ id, path, name }) => (
                <Link
                  key={id}
                  to={path}
                  className="text-sm font-semibold text-gray-600"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </article>

        <article className="card card-compact">
          <div className="card-body">
            <h3 className="text-lg font-bold text-gray-700">Support</h3>

            <div className="flex flex-col gap-1.5">
              {data.support.map(({ id, path, name }) => (
                <Link
                  key={id}
                  to={path}
                  className="text-sm font-semibold text-gray-600"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </article>

        <article className="card card-compact">
          <div className="card-body">
            <h3 className="text-lg font-bold text-gray-700">Legal</h3>

            <div className="flex flex-col gap-1.5">
              {data.legal.map(({ id, path, name }) => (
                <Link
                  key={id}
                  to={path}
                  className="text-sm font-semibold text-gray-600"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>

      <h6 className="font-semibold text-center text-base-200 bg-primary py-5">
        Xventory {new Date().getFullYear()}. All rights reserved.
      </h6>
    </footer>
  );
}
