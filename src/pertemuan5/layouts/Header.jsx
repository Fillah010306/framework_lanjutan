import { FaBell, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-4">
      
      {/* Search */}
      <div className="relative w-96">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 pr-10 rounded-md border"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-400" />
      </div>

      {/* Profile */}
      <div className="flex items-center space-x-4">
        <div className="relative bg-blue-100 p-3 rounded-full">
          <FaBell />
          <span className="absolute -top-1 -right-1 bg-blue-400 text-xs px-1 rounded-full">
            5
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span>Hello, <b>Fillah</b></span>
          <img
            src="https://avatar.iran.liara.run/public/28"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}