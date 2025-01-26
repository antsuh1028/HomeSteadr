import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { BaselineMoreHoriz } from "@/assets/MoreSymbol";
import { Button } from "./ui/button";

const Navbar = () => {
    const { firebaseUser, logout } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);
    const { toast } = useToast();

    const handleLogout = async () => {
        try {
            await logout();
            toast({
                title: "Logged out successfully.",
                variant: "default",
                duration: 5000,
            });
        } catch (error) {
            const errorMessage = (error as Error).message;
            toast({
                title: "Error logging out.",
                description: errorMessage,
                variant: "destructive",
                duration: 5000,
            });
        }
    };

    return (
        <nav className="bg-[#B8B8B8] px-6 py-4 top-0  left-0 fixed  w-full z-50">
            <div className="flex items-center justify-between h-full ">
                <Link to="/" className="text-black">
                    <svg
                        width="32"
                        height="24"
                        viewBox="0 0 32 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hover:opacity-80 transition-opacity"
                        onClick={() => {
                            setShowDropdown(false);
                        }}
                    >
                        <path d="M16 0L32 24H0L16 0Z" fill="black" />
                        <path d="M13 12L19 24H7L13 12Z" fill="black" />
                    </svg>
                    <span className="sr-only">Home</span>
                </Link>

                <div className="flex items-center gap-4 ml-auto">
                    <Button asChild className="rounded-none">
                        <Link
                            to="/"
                            className=""
                            onClick={() => {
                                setShowDropdown(false);
                            }}
                        >
                            Home
                        </Link>
                    </Button>
                    <Button asChild className="rounded-none">
                    <Link
                        to="/portfolio"
                        className="text-black hover:opacity-80 transition-opacity text-sm"
                        onClick={() => {
                            setShowDropdown(false);
                        }}
                    >
                        Portfolio
                    </Link>
                    </Button>

                    {firebaseUser ? (
                        <div className="relative">
                            <div
                                className="w-14 h-8 bg-black rounded-full hover:opacity-80 transition-opacity relative hover:bg-gray-900 active:bg-gray-800 cursor-pointer"
                                aria-label="Profile"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                <BaselineMoreHoriz
                                    color="white"
                                    className="mx-auto my-auto h-full w-full"
                                />
                            </div>
                            {showDropdown && (
                                // <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border-gray-200">
                                    <Button className="px-4 py-2 text-sm text-white hover:bg-gray-500 cursor-pointer transition-colors w-full rounded-none">
                                        Profile
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            handleLogout();
                                            setShowDropdown(false);
                                        }}
                                        className="w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-500 transition-colors rounded-none"
                                    >
                                        Logout
                                    </Button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="px-4 py-2 text-sm text-black hover:opacity-80 transition-opacity border border-black rounded-md "
                        >
                            Login
                        </Link>
                    )}

                    {/* <div className="relative">
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
          </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
