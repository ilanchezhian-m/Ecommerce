import { useState } from "react";
import wavslogo from "../assets/wavslogo.webp";

export default function Header() {
  const [open, setOpen] = useState(true); // tracks mobile menu open/close

  return (
    <header className="border-b bg-white">
      {/* Top red welcome bar */}
      <div className="bg-red-700 py-2">
        <p className="text-white font-bold text-center">
          Welcome to Wave Sports Nutrition!
        </p>
      </div>

      {/* Main header row */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 gap-6">
        {/* Logo */}
        <img
          src={wavslogo}
          className="h-12 w-auto"
          alt="Wave Sports Nutrition logo"
        />

        {/* Desktop nav (hidden on small screens) */}
        <nav className="hidden md:flex gap-6 font-bold text-gray-700">
          <p>Shop</p>
          <p>Combo</p>
          <p>Brands</p>
          <p>Categories</p>
          <p>Merchandise</p>
          <p>My Account</p>
          <p>Cart</p>
        </nav>

    
        <button
          className="md:hidden flex flex-col justify-center items-center h-10 w-10"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`h-0.5 w-6 bg-gray-800 rounded transition-transform duration-200 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-800 rounded my-1 transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-800 rounded transition-transform duration-200 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>


      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden bg-white shadow-lg px-6 overflow-hidden transition-all duration-200 ${
          open ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="space-y-3 font-bold text-gray-700">
          <p>Shop</p>
          <p>Combo</p>
          <p>Brands</p>
          <p>Categories</p>
          <p>Merchandise</p>
          <p>My Account</p>
          <p>Cart</p>
        </div>
      </div>
    </header>
  );
}
