import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-[#B8B8B8] px-6 py-4 top-0  left-0  w-full z-50">
      <div className="flex items-center justify-between h-full">
        <Link to="/home" className="text-black">
          <svg
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:opacity-80 transition-opacity"
            onClick={() => { setShowDropdown(false) }}
          >
            <path d="M16 0L32 24H0L16 0Z" fill="black" />
            <path d="M13 12L19 24H7L13 12Z" fill="black" />
          </svg>
          <span className="sr-only">Home</span>
        </Link>

        <div className="flex items-center gap-8 ml-auto">
          <Link
            to="/home"
            className="text-black hover:opacity-80 transition-opacity text-sm"
            onClick={() => { setShowDropdown(false) }}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="text-black hover:opacity-80 transition-opacity text-sm"
            onClick={() => { setShowDropdown(false) }}
          >
            Portfolio
          </Link>
          <div className="relative">
            <button
              className="w-8 h-8 bg-black rounded-full hover:opacity-80 transition-opacity"
              aria-label="Profile"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                <div className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Button
                </div>
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors">
                  Profile
                </div>
                <Link
                  to="/"
                  className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-gray-100 transition-colors"
                  onClick={() => { setShowDropdown(false) }}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;