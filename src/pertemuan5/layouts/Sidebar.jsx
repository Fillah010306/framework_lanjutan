import { FaHome, FaShoppingCart, FaUsers, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex min-h-screen w-72 flex-col bg-white p-6 shadow-lg">
      
      {/* Logo */}
      <div className="flex flex-col">
        <span className="text-3xl font-bold">
          Dashboard-nya<span className="text-green-500">.</span>
        </span>
        <span className="text-gray-400 text-sm">
          Modern Admin Dashboard
        </span>
      </div>

      {/* Menu */}
      <div className="mt-10 space-y-3">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-xl transition ${
              isActive
                ? "bg-green-200 text-green-600 font-semibold"
                : "hover:bg-green-100 text-gray-600"
            }`
          }
        >
          <FaHome className="mr-3" /> Dashboard
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-xl transition ${
              isActive
                ? "bg-green-200 text-green-600 font-semibold"
                : "hover:bg-green-100 text-gray-600"
            }`
          }
        >
          <FaShoppingCart className="mr-3" /> Orders
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-xl transition ${
              isActive
                ? "bg-green-200 text-green-600 font-semibold"
                : "hover:bg-green-100 text-gray-600"
            }`
          }
        >
          <FaUsers className="mr-3" /> Customers
        </NavLink>

      </div>

      {/* Footer */}
      <div className="mt-auto bg-green-500 p-4 rounded-lg text-white">
        <p className="text-sm">
          Organize your menu easily
        </p>
        <button className="mt-3 flex items-center bg-white text-gray-700 px-3 py-1 rounded-md">
          <FaPlus className="mr-2" /> Add Menu
        </button>
      </div>
    </div>
  );
}