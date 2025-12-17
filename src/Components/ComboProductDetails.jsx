// product description for Combo pages link to combo.js file and product.js file 

import { comboProducts } from "../data/combo/combo";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ComboProductDetails() {
  const { id } = useParams();

  const product = comboProducts.find(p => p.id === id);

  const [activeImg, setActiveImg] = useState(product?.images?.[0] || "");

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
                <select className="mt-2 border p-2 w-full">
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

        <button className="mt-6 bg-black text-white px-6 py-2 rounded">
          Add Combo to Cart
        </button>
      </div>
    </div>
  );
}
