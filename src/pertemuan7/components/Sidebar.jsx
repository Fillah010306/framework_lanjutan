import { Link, useLocation } from "react-router-dom";

import {
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaBox
} from "react-icons/fa";

export default function Sidebar() {

  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome />
    },

    {
      name: "Orders",
      path: "/orders",
      icon: <FaShoppingCart />
    },

    {
      name: "Customers",
      path: "/customers",
      icon: <FaUsers />
    },

    // TAMBAHAN PRODUCTS
    {
      name: "Products",
      path: "/products",
      icon: <FaBox />
    },
  ];

  return (
    <div className="w-64 bg-white shadow-md min-h-screen p-5">

      <h1 className="text-2xl font-bold mb-8">
        Sedap<span className="text-green-500">.</span>
      </h1>

      <ul className="space-y-3">

        {menu.map((item, index) => (

          <li key={index}>

            <Link
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition 
                ${
                  location.pathname.startsWith(item.path) &&
                  item.path !== "/"
                    ? "bg-green-500 text-white"
                    : location.pathname === "/" && item.path === "/"
                    ? "bg-green-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >

              {item.icon}

              {item.name}

            </Link>

          </li>

        ))}

      </ul>

    </div>
  );
}