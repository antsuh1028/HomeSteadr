import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#B8B8B8] px-6 py-4 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-black">
          <svg
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:opacity-80 transition-opacity"
          >
            <path d="M16 0L32 24H0L16 0Z" fill="black" />
            <path d="M13 12L19 24H7L13 12Z" fill="black" />
          </svg>
          <span className="sr-only">Home</span>
        </Link>

        <div className="flex items-center gap-8 ml-auto">
          <Link
            to="/"
            className="text-black hover:opacity-80 transition-opacity text-sm"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="text-black hover:opacity-80 transition-opacity text-sm"
          >
            Portfolio
          </Link>
          <button
            className="w-8 h-8 bg-black rounded-full hover:opacity-80 transition-opacity"
            aria-label="Profile"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
