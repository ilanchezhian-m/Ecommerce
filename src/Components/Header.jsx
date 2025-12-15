import { useMemo, useRef, useState, useEffect } from "react";
import wavslogo from "../assets/wavslogo.webp";
import { NavLink, useNavigate } from "react-router-dom";
import { products } from "../data/brand/product";



export default function Header() {

  const [open, setOpen] = useState(false); // mobile menu
  const [openMenu, setOpenMenu] = useState(null); // "brands" | "categories" | null
  const navigate = useNavigate();
  const menuRef = useRef(null);
 const safeNavigate = (to) => {
  setOpenMenu(null);
  setOpen(false);
  navigate(to);
};

const closeMenus = () => {
  setOpenMenu(null);
  setOpen(false);
};


  // Active NavLink style
  const navItemStyle = ({ isActive }) =>
    isActive
      ? "text-red-700 font-extrabold"
      : "text-[#4F5055] hover:text-red-600";

  // Brands (A–Z)
  const brands = useMemo(() => {
    const counts = products.reduce((acc, p) => {
      acc[p.brand] = true;
      return acc;
    }, {});
    return Object.keys(counts).sort((a, b) => a.localeCompare(b));
  }, []);

  // Categories (excluding combo if needed)
  const categories = useMemo(() => {
    return [...new Set(products.flatMap(p => p.categories))]
      .sort((a, b) => a.localeCompare(b));
  }, []);

    const goToBrand = (brand) => {
      safeNavigate(`/shop?brand=${encodeURIComponent(brand)}`);
    };

    const goToCategory = (category) => {
      safeNavigate(`/shop?category=${encodeURIComponent(category)}`);
    };

  // Click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <header className="border-b bg-white">
      {/* Top bar */}
      <div className="bg-red-700 py-2">
        <h1 className="text-white font-bold text-center">
          Welcome to Wave Sports Nutrition!
        </h1>
      </div>

      {/* Header row */}
      <div className="max-w-6xl mx-auto relative flex items-center justify-between px-4 my-3 gap-6">
        {/* Logo */}
        <NavLink to="/">
          <img src={wavslogo} className="h-12 w-auto" alt="Wave logo" />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-8 font-bold text-lg items-center" ref={menuRef}>
          <NavLink to="/shop" className={navItemStyle} onClick={closeMenus}>
            Shop
          </NavLink>

          {/* Combo as category */}
          <button
            onClick={() => safeNavigate("/shop?category=combo")}
            className="text-[#4F5055] hover:text-red-600 font-bold"
          >
            Combo
          </button>

          {/* Brands dropdown */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenMenu(openMenu === "brands" ? null : "brands")
              }
              className="text-[#4F5055] hover:text-red-600 font-bold"
            >
              Brands
            </button>

            {openMenu === "brands" && (
              <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 z-50 bg-white border rounded shadow overflow-auto p-4 max-h-64 min-w-max grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <button
                  onClick={() => goToBrand("")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-50"
                >
                  All
                </button>
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => goToBrand(brand)}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-50"
                  >
                    {brand}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Categories dropdown */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenMenu(openMenu === "categories" ? null : "categories")
              }
              className="text-[#4F5055] hover:text-red-600 font-bold"
            >
              Categories
            </button>

            {openMenu === "categories" && (
              <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 z-50 bg-white border rounded shadow overflow-auto p-4 max-h-64 min-w-max grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <button
                  onClick={() => navigate("/shop")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-50"
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => goToCategory(cat)}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-50"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

           <button
            onClick={() => safeNavigate("/shop?category=merchandise")}
            className="text-[#4F5055] hover:text-red-600 font-bold"
          >
            Merchandise
          </button>

          <NavLink to="/login" className={navItemStyle} onClick={closeMenus}>
            My Account
          </NavLink>
          <NavLink to="/cart" className={navItemStyle} onClick={closeMenus}>
            Cart
          </NavLink>
        </nav>
   {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow px-6 py-4 space-y-4 font-bold flex flex-col overflow-auto">
          <NavLink to="/shop" onClick={closeMenus}>
            Shop
          </NavLink>

          <button className="text-left" onClick={() => goToCategory("combo")}>
            Combo
          </button>

          <NavLink to="/merch" onClick={closeMenus}>
            Merchandise
          </NavLink>

          {/* Mobile Brands */}
          <details>
            <summary className="cursor-pointer">Brands</summary>
            <div className=" mt-2 space-y-2 flex flex-col h-40 overflow-auto">
              {brands.map((b) => (
                <button key={b} onClick={() => goToBrand(b)} className="text-left">
                  {b}
                </button>
              ))}
            </div>
          </details>

          {/* Mobile Categories */}
          <details>
            <summary className="cursor-pointer">Categories</summary>
            <div className="mt-2 space-y-2 flex flex-col h-40 overflow-auto">
              {categories.map((c) => (
                <button key={c} onClick={() => goToCategory(c)}  className="text-left">
                  {c}
                </button>
              ))}
            </div>
          </details>

          <NavLink to="/login" onClick={closeMenus}>
            My Account
          </NavLink>

          <NavLink to="/cart" onClick={closeMenus}>
            Cart
          </NavLink>
        </div>
      )}


   
    </header>
  );
}
