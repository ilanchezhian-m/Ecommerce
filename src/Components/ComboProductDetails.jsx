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
    <div className="container mx-auto p-6 grid md:grid-cols-2 gap-8">
      
      {/* LEFT: Images */}
      <div>
        <img
          src={activeImg}
          alt={product.name}
          className="w-full rounded border"
        />

        <div className="flex gap-2 mt-4">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setActiveImg(img)}
              className={`w-16 h-16 cursor-pointer border rounded
                ${activeImg === img ? "border-black" : "border-gray-300"}
              `}
            />
          ))}
        </div>
      </div>

      {/* RIGHT: Details */}
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.brand}</p>
        <p className="text-xl font-semibold mt-2">₹{product.price}</p>

        {/* Combo Items */}
        <div className="mt-6">
          <h2 className="font-semibold mb-3">Combo Includes</h2>

          {product.comboItems.map((item, i) => (
            <div key={i} className="mb-4 border p-3 rounded">
              <p className="font-medium">
                {item.qty} x {item.name} {item.weight && `(${item.weight})`}
              </p>

              {/* Flavour selector per item */}
              {item.flavours?.length > 0 && (
                <select
                  className="mt-2 border p-2 w-full rounded transition duration-200 ease-out hover:border-black focus:outline-none focus:ring-2 focus:ring-black/40"
                  value={selectedFlavours[i] || ""}
                  onChange={(e) =>
                    setSelectedFlavours((prev) => ({ ...prev, [i]: e.target.value }))
                  }
                >
                  <option value="">Select flavour</option>
                  {item.flavours.map((flavour, idx) => (
                    <option key={idx} value={flavour}>
                      {flavour}
                    </option>
                  ))}
                </select>
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
          className="mt-6 bg-black text-white px-6 py-2 rounded transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
        >
          Add Combo to Cart
        </button>
      </div>
    </div>
  );
}
