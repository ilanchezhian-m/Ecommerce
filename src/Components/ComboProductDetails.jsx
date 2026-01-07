// product description for Combo pages link to combo.js file and product.js file 

import { comboProducts } from "../data/combo/combo";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../Context/CartContext";

export default function ComboProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = comboProducts.find((p) => p.id === id);

  const [activeImg, setActiveImg] = useState(product?.images?.[0] || "");
  const [selectedFlavours, setSelectedFlavours] = useState({});

  if (!product) {
    return <p className="p-6">Combo product not found</p>;
  }

  return (
    <div className="container mx-auto p-6 grid md:grid-cols-2 gap-8 max-w-6xl">
      
      {/* LEFT: Images */}
      <div>
        <img
          src={activeImg}
          alt={product.name}
          className="w-full rounded-lg shadow-md"
        />

        <div className="flex gap-2 mt-4">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setActiveImg(img)}
              className={`w-16 h-16 cursor-pointer border-2 rounded-lg transition-all duration-200 hover:scale-105
                ${activeImg === img ? "border-red-600 shadow-md" : "border-gray-300 hover:border-gray-400"}
              `}
            />
          ))}
        </div>
      </div>

      {/* RIGHT: Details */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 text-lg">{product.brand}</p>
        <p className="text-2xl font-bold text-red-600 mt-4">₹{product.price}</p>

        {/* Combo Items */}
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-6 text-gray-900">What's Included:</h2>

          {product.comboItems.map((item, i) => (
            <div key={i} className="mb-6 bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <p className="font-bold text-lg text-gray-900">
                {item.qty}x {item.name} {item.weight && `(${item.weight})`}
              </p>

              {/* Flavour selector per item */}
              {item.flavours?.length > 0 && (
                <div className="mt-4">
                  <label className="text-sm font-semibold text-gray-700 block mb-3">
                    Choose Flavour:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {item.flavours.map((flavour, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          setSelectedFlavours((prev) => ({ ...prev, [i]: flavour }))
                        }
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 border-2 ${
                          selectedFlavours[i] === flavour
                            ? "bg-red-600 text-white border-red-600 shadow-md"
                            : "bg-white text-gray-700 border-gray-300 hover:border-red-400 hover:bg-red-50"
                        }`}
                      >
                        {flavour}
                      </button>
                    ))}
                  </div>
                  {selectedFlavours[i] && (
                    <p className="text-sm text-green-600 font-medium mt-2">
                      ✓ {selectedFlavours[i]} selected
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() =>
            addToCart({
              ...product,
              selectedFlavours,
            })
          }
          className="mt-8 w-full bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg transition-all duration-200 hover:bg-red-700 hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
        >
          Add Combo to Cart
        </button>
      </div>
    </div>
  );
}
