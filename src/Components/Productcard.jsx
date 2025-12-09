export default function ProductCard({  name, price,  images }) {
  // this is an shop.jsx page it been attached as a props from products.js , shop.jsx files
  return (
    <div className="  p-3 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col max-w-xs">

      {/* Product Image */}
      <div className="w-full  lg:h-60 flex items-center justify-center mb-4 bg-gray-50 rounded-md">
        <img 
          src={images[0]} 
          alt={name} 
          className="max-h-full object"
        />
      </div>

      {/* Product Name */}
      <h2 className="font-semibold lg:text-lg text-center text-xs">{name}</h2>

      {/* Brand */}
      {/* <p className="text-sm text-gray-500 text-center">{brand}</p> */}

      {/* Size */}
      {/* <p className="text-xs text-gray-500 mb-2 text-center">Size: {size}</p> */}

      {/* Price */}
      <p className="text-red-600 font-bold text-xs lg:text-lg mt-auto text-center">₹{price}</p>
    </div>
  );
}
