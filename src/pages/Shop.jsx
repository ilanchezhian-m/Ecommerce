import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../Components/Productcard";
import { products } from "../data/brand/product";
import { Link } from "react-router-dom";


export default function Shop() {
  const location = useLocation();

  // Read brand and category from URL query params
  const query = new URLSearchParams(location.search);
  const urlBrand = query.get("brand") ? decodeURIComponent(query.get("brand")) : null;
  const urlCategory = query.get("category") ? decodeURIComponent(query.get("category")) : null;


  // Compute brand counts
  const brandCounts = useMemo(() => {
    return products.reduce((acc, product) => {
      acc[product.brand] = (acc[product.brand] || 0) + 1;
      return acc;
    }, {});
  }, []);


  // Sorted brands
  const brandsSorted = useMemo(() => {
    return Object.entries(brandCounts)
      .map(([brand, count]) => ({ brand, count }))
      .sort((a, b) => b.count - a.count);
  }, [brandCounts]);


  // Filter products based on URL brand and category
  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    if (urlBrand) {
      filtered = filtered.filter((p) => p.brand === urlBrand);
    }
    
    if (urlCategory) {
      filtered = filtered.filter((p) => p.categories && p.categories.includes(urlCategory));
    }
    
    return filtered;
  }, [urlBrand, urlCategory]);

  return (
    <div className="flex flex-col lg:flex-row container mx-auto gap-6 p-6">

      {/* Sidebar */}
      <aside className="w-full lg:w-64 lg:sticky lg:mt-20 lg:mr-10 lg:self-start">
        <div className="border rounded-lg p-4 shadow-sm bg-white">
          <h2 className="font-bold mb-3 text-lg text-red-700">Brands</h2>

          {/* Show clickable brand list (no checkboxes) */}
          <div className="space-y-2 max-h-[60vh] overflow-auto pr-2">
            {brandsSorted.map(({ brand, count }) => (
              <Link
              key={brand}
              to={`/shop?brand=${encodeURIComponent(brand)}`}
              className={`flex items-center justify-between px-2 py-1 rounded
                ${urlBrand === brand ? "bg-red-600 text-white" : "hover:bg-gray-100"}`}
            >
              <span>{brand}</span>
              <span className="text-sm">({count})</span>
            </Link>
            ))}

            {/* Clear Filter */}
            {(urlBrand || urlCategory) && (
              <a
                href="/shop"
                className="block mt-3 px-3 py-2 bg-gray-200 rounded-md text-center"
              >
                Clear All
              </a>
            )}
          </div>
        </div>
      </aside>

      {/* Main Products */}
      <main className="flex-1">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">
            {urlBrand || urlCategory || "All Products"}
          </h1>
          <p className="text-sm text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              images={item.images}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
