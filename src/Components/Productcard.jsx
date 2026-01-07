import { Link } from "react-router-dom";

export default function ProductCard({ id, name, price, images ,type }) {

  const link = type === "combo" ? `/combo/${id}` : `/product/${id}`;

  return (
    <Link to={link} className="group block">
      <div className="p-3 lg:h-80 shadow-sm hover:shadow-lg transition-transform duration-200 ease-out cursor-pointer flex flex-col max-w-xs rounded-lg bg-white transform group-hover:-translate-y-1">

        {/* Product Image */}
        <div className="w-full lg:h-50 flex items-center justify-center mb-4 rounded-md overflow-hidden">
          <img 
            src={images[0]} 
            alt={name} 
            className="max-h-full object-contain transition-transform duration-200 ease-out group-hover:scale-105"
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
{/* console.log("CARD TYPE:", type); */}
      </div>
    </Link>
  );
}
