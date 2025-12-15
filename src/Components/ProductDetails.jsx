// overall one component for the entire product descritpipkn





import { useParams } from "react-router-dom";
import { products } from "../data/brand/product";
import { useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(p => p.id === id);

  // ✅ Hook ALWAYS runs
  const [activeImg, setActiveImg] = useState(
    product?.images?.[0] || ""
  );

  if (!product) {
    return <p className="p-6">Product not found</p>;
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
                ${activeImg === img ? "border-black" : "border-gray-300"}`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT: Details */}
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.brand}</p>

        <p className="text-xl font-semibold mt-2">₹{product.price}</p>

        {/* Benefits */}
        <ul className="mt-4 list-disc ml-5 space-y-1">
          {product.uses?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {/* Flavours */}
        {product.flavour?.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold mb-2">Available Flavours</p>
            <div className="flex flex-wrap gap-2">
              {product.flavour.map(f => (
                <span
                  key={f}
                  className="px-3 py-1 border rounded text-sm"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Add to cart (later logic) */}
        <button className="mt-6 bg-black text-white px-6 py-2 rounded">
          Add to Cart
        </button>

<ul className="mt-4 list-disc ml-5 space-y-1">
  {product.description.map((point, index) => (
    <p key={index}>{point}</p>
  ))}
</ul>


      </div>
    </div>
  );
}
