import { useState } from "react";
import wavslogo from "../assets/wavslogo.webp";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false); // tracks mobile menu open/close


  const navItemStyle =({isActive}) => isActive ? "text-red-700 font-extrabold": "text-[#4F5055] hover:text-red-600";


  return (
    <header className="border-b bg-white">
      {/* Top red welcome bar */}
      <div className="bg-red-700 py-2">
        <h1 className="text-white font-bold text-center">
          Welcome to Wave Sports Nutrition!
        </h1>
      </div>

      {/* Main header row */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2 gap-6">
        {/* Logo */}
        <NavLink className={navItemStyle} to="/" >
          <img
          src={wavslogo}
          className="h-20 w-auto"
          alt="Wave Sports Nutrition logo"
        /></NavLink>
        

        {/* Desktop nav (hidden on small screens) */}
        <nav className="hidden lg:flex gap-8 font-bold text-lg">
          <NavLink to="/shop" className={navItemStyle} >Shop</NavLink>
          <NavLink className={navItemStyle} >Combo</NavLink>
          <NavLink className={navItemStyle} >Brands</NavLink>
          <NavLink className={navItemStyle} >Categories</NavLink>
          <NavLink  className={navItemStyle} >Merchandise</NavLink>
          <NavLink to ="/login"className={navItemStyle} >My Account</NavLink>
          <NavLink className={navItemStyle} >Cart</NavLink>
        </nav>

    
        <button
          className="lg:hidden flex flex-col justify-center items-center h-10 w-10"
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

{/* mobile navbar otpions */}
      {/* Mobile dropdown menu */}
      <div
        className={`lg:hidden bg-white shadow-lg px-6 overflow-hidden transition-all duration-200 ${
          open ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="space-y-3 font-bold leading-7 text-gray-700">
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


// navlink react router using here 









  );
}
