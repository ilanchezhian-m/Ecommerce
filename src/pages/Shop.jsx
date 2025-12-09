import { useMemo, useState } from "react";
import ProductCard from "../Components/Productcard";
import { products } from "../data/brand/product";


export default function Shop() {
  const [selectedBrands, setSelectedBrands] = useState([]);

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
    <div className="flex container mx-auto gap-6 p-6">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 sticky mt-20 mr-10 self-start">
        <div className="border rounded-lg p-4 shadow-sm bg-white">
          <h2 className="font-bold mb-3 text-lg text-red-700">Brands</h2>

          {/* Clear Filters Button */}
          {selectedBrands.length > 0 && (
            <button
              onClick={() => setSelectedBrands([])}
              className="mb-3 px-3 py-2 w-full bg-gray-200 rounded-md"
            >
              Clear All
            </button>
          )}

          <div className="space-y-2 max-h-[60vh] overflow-auto pr-2">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
