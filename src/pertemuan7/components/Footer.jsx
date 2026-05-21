import { FaGithub, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              MyDashboard
            </h1>

            <p className="text-gray-500 text-sm mt-2">
              Aplikasi dashboard sederhana berbasis React + Tailwind untuk management data customer, order, dan produk.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h2 className="text-gray-800 font-semibold mb-3">
              Menu
            </h2>

            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
              <li className="hover:text-blue-600 cursor-pointer">Customers</li>
              <li className="hover:text-blue-600 cursor-pointer">Orders</li>
              <li className="hover:text-blue-600 cursor-pointer">Products</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-gray-800 font-semibold mb-3">
              Contact
            </h2>

            <div className="flex items-center gap-3 text-gray-500 text-sm mb-2">
              <FaEnvelope />
              support@mydashboard.com
            </div>

            <div className="flex gap-4 mt-4 text-gray-500">
              <FaGithub className="hover:text-black cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} MyDashboard. All rights reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}