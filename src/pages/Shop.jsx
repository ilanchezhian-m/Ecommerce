import { useMemo, useState } from "react";
import ProductCard from "../Components/Productcard";
import { products } from "../data/brand/product";


export default function Shop() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  // Compute brand counts
  const brandCounts = useMemo(() => {
    return products.reduce((acc, product) => {
      acc[product.brand] = (acc[product.brand] || 0) + 1;
      return acc;
    }, {});
  }, [products]);

  const brandsSorted = useMemo(() => {
    return Object.entries(brandCounts)
      .map(([brand, count]) => ({ brand, count }))
      .sort((a, b) => b.count - a.count);
  }, [brandCounts]);

  // Toggle checkbox
  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand) // remove
        : [...prev, brand] // add
    );
  };

  // Filter products when checkboxes are selected
  const filteredProducts = useMemo(() => {
    if (selectedBrands.length === 0) return products;

    return products.filter((p) => selectedBrands.includes(p.brand));
  }, [products, selectedBrands]);

  return (
    <div className="flex flex-col lg:flex-row container mx-auto gap-6 p-6">
      {/* Sidebar - Mobile (Top) & Desktop (Side) */}
      <aside className="w-full lg:w-64 lg:sticky lg:mt-20 lg:mr-10 lg:self-start">
        <div className="border rounded-lg p-4 shadow-sm bg-white">
          {/* Mobile: Collapsible Button */}
          <button
            onClick={() => setIsBrandsOpen(!isBrandsOpen)}
            className="lg:hidden w-full flex items-center justify-between font-bold text-lg text-red-700 mb-3"
          >
            <span>Brands</span>
            <span className="text-xl">{isBrandsOpen ? '−' : '+'}</span>
          </button>

          {/* Desktop: Static Heading */}
          <h2 className="hidden lg:block font-bold mb-3 text-lg text-red-700">Brands</h2>

          {/* Clear Filters Button */}
          {selectedBrands.length > 0 && (
            <button
              onClick={() => setSelectedBrands([])}
              className={`mb-3 px-3 py-2 w-full bg-gray-200 rounded-md ${
                !isBrandsOpen && 'hidden lg:block'
              }`}
            >
              Clear All
            </button>
          )}

          {/* Brand List - Collapsible on Mobile, Always Open on Desktop */}
          <div className={`space-y-2 max-h-[60vh] overflow-auto pr-2 ${
            !isBrandsOpen && 'hidden lg:block'
          }`}>
            {brandsSorted.map(({ brand, count }) => (
              <label
                key={brand}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                  />
                  <span>{brand}</span>
                </div>
                <span className="text-sm">({count})</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">
            {selectedBrands.length === 0
              ? "All Products"
              : selectedBrands.join(", ")}
          </h1>
          <p className="text-sm text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              // brand={item.brand}
              // size={item.size}
              price={item.price}
              images={item.images}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
