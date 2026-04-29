import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/appReducer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const { user } = useSelector((state: any) => state?.app);
  const dispatch = useDispatch();
  console.log("user+++", user);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5" : "bg-white"}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 flex-shrink-0 group"
            aria-label="Bazario Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md group-hover:shadow-indigo-300 transition-shadow">
              <span className="text-white font-black text-lg leading-none">
                B
              </span>
            </div>
            <span className="font-black text-xl tracking-tight text-gray-900">
              Bazario
            </span>
          </Link>

          {/* Search */}
          <div
            className={`hidden md:flex flex-1 max-w-xl relative transition-all duration-300 ${searchFocused ? "max-w-2xl" : ""}`}
          >
            <div
              className={`flex items-center w-full bg-gray-100 rounded-xl px-4 gap-2 transition-all duration-200 ${searchFocused ? "ring-2 ring-indigo-500 bg-white shadow-sm" : "hover:bg-gray-200"}`}
            >
              <svg
                className="w-4 h-4 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                placeholder="Search products, brands, categories..."
                className="flex-1 bg-transparent py-2.5 text-sm outline-none text-gray-700 placeholder-gray-400"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                aria-label="Search products"
              />
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-600">
            {["Deals", "New Arrivals", "Brands"].map((link) => (
              <Link
                key={link}
                to="#"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-indigo-600 transition-colors whitespace-nowrap"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              className="relative p-2.5 rounded-xl hover:bg-gray-100 transition-colors group"
              aria-label={`Cart with ${cartCount} items`}
            >
              <svg
                className="w-5 h-5 text-gray-700 group-hover:text-indigo-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center min-w-[18px] min-h-[18px] px-1">
                  {cartCount}
                </span>
              )}
            </button>
            {user ? (
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-all shadow-sm shadow-indigo-200 hover:shadow-md hover:shadow-indigo-300 active:scale-95"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 text-sm font-semibold text-gray-700 hover:text-indigo-700 transition-all"
                  aria-label="Login"
                >
                  <Link to="/login">Login</Link>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-all shadow-sm shadow-indigo-200 hover:shadow-md hover:shadow-indigo-300 active:scale-95">
                  <Link to="/register">Sign Up</Link>
                </button>
              </>
            )}

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-gray-700 rounded transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-gray-700 rounded transition-all ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-gray-700 rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64 pb-4" : "max-h-0"}`}
        >
          <div className="flex items-center w-full bg-gray-100 rounded-xl px-4 gap-2 mb-3">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="search"
              placeholder="Search products..."
              className="flex-1 bg-transparent py-2.5 text-sm outline-none text-gray-700 placeholder-gray-400"
              aria-label="Mobile search"
            />
          </div>
          {["Deals", "New Arrivals", "Brands", "Login"].map((link) => (
            <a
              key={link}
              href="#"
              className="flex items-center px-3 py-2.5 rounded-lg hover:bg-gray-100 text-sm font-medium text-gray-700"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
