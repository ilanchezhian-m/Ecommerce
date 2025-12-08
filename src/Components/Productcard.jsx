export default function ProductCard({  name, brand, price, size, images }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col">

      {/* Product Image */}
      <div className="w-full h-40 flex items-center justify-center mb-4 bg-gray-50 rounded-md">
        <img 
          src={images[0]} 
          alt={name} 
          className="max-h-full object-contain"
        />
      </div>

      {/* Product Name */}
      <h2 className="font-semibold text-lg line-clamp-2">{name}</h2>

      {/* Brand */}
      <p className="text-sm text-gray-500">{brand}</p>

      {/* Size */}
      <p className="text-xs text-gray-500 mb-2">Size: {size}</p>

      {/* Price */}
      <p className="text-red-600 font-bold text-xl mt-auto">₹{price}</p>
    </div>
  );
}
