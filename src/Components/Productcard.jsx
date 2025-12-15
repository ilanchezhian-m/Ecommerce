import { Link } from "react-router-dom";

export default function ProductCard({ id, name, price, images }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="p-3 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col max-w-xs">

        {/* Product Image */}
        <div className="w-full lg:h-60 flex items-center justify-center mb-4 bg-gray-50 rounded-md">
          <img 
            src={images[0]} 
            alt={name} 
            className="max-h-full object-contain"
          />
        </div>

        {/* Product Name */}
        <h2 className="font-semibold lg:text-lg text-center text-xs">
          {name}
        </h2>

        {/* Price */}
        <p className="text-red-600 font-bold text-xs lg:text-lg mt-auto text-center">
          ₹{price}
        </p>

      </div>
    </Link>
  );
}
