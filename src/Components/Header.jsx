import { useMemo, useRef, useState, useEffect } from "react";
import wavslogo from "../assets/wavslogo.webp";
import { NavLink, useNavigate } from "react-router-dom";
import { products } from "../data/brand/product";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";



export default function Header() {

  const [open, setOpen] = useState(false); // mobile menu
  const [openMenu, setOpenMenu] = useState(null); // "brands" | "categories" | null
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // header search toggle
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const seen = new Set();
    const results = [];
    
    products.forEach((product) => {
      if (product.name.toLowerCase().includes(query) && !seen.has(product.name)) {
        seen.add(product.name);
        results.push({ name: product.name, type: 'product' });
      }
      if (product.brand.toLowerCase().includes(query) && !seen.has(product.brand)) {
        seen.add(product.brand);
        results.push({ name: product.brand, type: 'brand' });
      }
    });
    
    return results.slice(0, 8);
  }, [searchQuery]);
  
  const handleHeaderSearch = (query = searchQuery) => {
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      setSearchQuery('');
      setShowSuggestions(false);
    }
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleHeaderSearch();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleHeaderSearch(suggestion.name);
  };
 
  const safeNavigate = (to) => {
  setOpenMenu(null);
  setOpen(false);
  navigate(to);
};

const closeMenus = () => {
  setOpenMenu(null);
  setOpen(false);
};

const { isAuthenticated, user, logout } = useAuth();

const handleLogout = () => {
  logout();
  closeMenus();
  navigate("/");
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

// cart updatning details

const { cart } = useCart();

const totalQty = cart.reduce(
  (sum, item) => sum + item.qty,
  0
);


  return (
    <header className="border-b bg-white sticky top-0 z-50 w-full shadow-sm">
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

          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-[#4F5055] text-sm">Hi, {user?.name}</span>
              <button 
                onClick={handleLogout}
                className="text-[#4F5055] hover:text-red-600 font-bold"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login" className={navItemStyle} onClick={closeMenus}>
              Login
            </NavLink>
          )}

         <NavLink
          to="/cart"
          onClick={closeMenus}
          className={({ isActive }) =>
            `relative ${isActive ? "text-red-700 font-extrabold" : "text-[#4F5055] hover:text-red-600"}`
          }
        >
          🛒 Cart
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {totalQty}
            </span>
          )}
        </NavLink>

        </nav>
            
          {/* Search */}
          <div className="relative">
            {!searchOpen ? (
              <button
                onClick={() => setSearchOpen(true)}
                className="px-3 py-1 text-red-600 hover:text-red-700 font-bold text-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            ) : (
              <div className="flex gap-1 bg-white p-2 rounded shadow-lg border border-gray-300 absolute right-0 w-72">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onKeyPress={handleSearchKeyPress}
                  onFocus={() => searchQuery && setShowSuggestions(true)}
                  autoFocus
                  className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600 flex-1"
                />
                <button
                  onClick={() => handleHeaderSearch()}
                  className="px-2 py-1 text-red-600 hover:text-red-700 font-bold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                    setShowSuggestions(false);
                  }}
                  className="px-2 py-1 text-gray-600 hover:text-gray-700 font-bold"
                >
                  ✕
                </button>
              </div>
            )}
            
            {searchOpen && showSuggestions && suggestions.length > 0 && (
              <div className="absolute right-0 top-full mt-12 bg-white border border-gray-300 rounded shadow-lg z-50 w-72">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-3 py-2 hover:bg-red-100 border-b last:border-b-0 transition text-sm"
                  >
                    <span className="font-semibold">{suggestion.name}</span>
                    <span className="text-gray-500 text-xs ml-2">({suggestion.type})</span>
                  </button>
                ))}
              </div>
            )}
          </div>









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

          {isAuthenticated ? (
            <>
              <span className="text-sm">Hi, {user?.name}</span>
              <button onClick={handleLogout} className="text-left">
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" onClick={closeMenus}>
              Login
            </NavLink>
          )}

          <NavLink to="/cart" onClick={closeMenus}>
            Cart
          </NavLink>
        </div>
      )}


   
    </header>
  );
}
