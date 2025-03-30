import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useLogoutMutation } from "../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu

  const navigationLinks = [
    { name: "Equipment", href: "/equipment" },
    { name: "How It Works", href: "/howItWork" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutMutation();
  const userInfo = useSelector((state) => state.auth.userInfo);
  // console.log(typeof userInfo.role);
  const handleLogout = async () => {
    console.log("Logging out...");
    try {
      await logoutUser();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-16 w-auto"
                src={logo}
                alt="Farm Equipment Logo"
              />
              <span className="ml-2 text-xl font-bold text-green-600">
                AgriBook
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8 ">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-green-600 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Auth Buttons */}
          {userInfo ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium mt-3"
              >
                {userInfo.name} ▼
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md">
                  <Link
                    to={`/profile${
                      userInfo.role === "owner" ? "/owner" : "/user"
                    }`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-700 hover:bg-gray-100 hover:text-green-600 block px-4 py-2 text-base font-medium"
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t mt-2 pt-2">
            <Link
              to="/login"
              className="text-gray-700 hover:bg-gray-100 hover:text-green-600 block px-4 py-2 text-base font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-600 text-white block mx-4 my-2 px-4 py-2 rounded-md text-base font-medium text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
