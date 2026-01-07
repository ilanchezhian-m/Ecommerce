import { useParams } from "react-router-dom";
import { products } from "../data/brand/product";
import { useState } from "react";
import { useCart } from "../Context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();


  const [activeImg, setActiveImg] = useState(
    product.images?.[0] || ""
  );

  // ✅ flavour (singular, array)
  const [selectedFlavour, setSelectedFlavour] = useState(
    product.flavour?.[0] || null
  );

  const handleAddToCart = () => {
    addToCart({
      ...product,
      flavour: selectedFlavour, // 👈 correct
    });
  };
  
    if (!product) {
    return <p className="p-6">Product not found</p>;
  }


  return (
    <div className="container mx-auto p-6 grid md:grid-cols-2 gap-8">
      
      {/* LEFT */}
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

      {/* RIGHT */}
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

        {/* ✅ FLAVOUR SELECTOR */}
        {product.flavour?.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold mb-2">Select Flavour</p>
            <div className="flex flex-wrap gap-2">
              {product.flavour.map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedFlavour(f)}
                  className={`px-3 py-1 border rounded text-sm transition duration-200 ease-out transform hover:-translate-y-0.5
                    ${
                      selectedFlavour === f
                        ? "bg-black text-white shadow-md"
                        : "bg-white hover:shadow-sm"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          className="mt-6 bg-black text-white px-6 py-2 rounded transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
        >
          Add to Cart
        </button>

        {/* Description */}
        <ul className="mt-4 list-disc ml-5 space-y-1">
          {product.description?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
