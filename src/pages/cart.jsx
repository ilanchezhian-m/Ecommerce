import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQty, clearCart, totalAmount } = useCart();

  if (cart.length === 0) {
    return (
      <p className="p-8 text-center text-gray-500">
        🛒 Your cart is empty
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => {
          const target = item.type === "combo" ? `/combo/${item.id}` : `/product/${item.id}`;
          return (
          <div
            key={item.cartKey || item.id}
            className="flex items-center justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-200 rounded-lg p-6"
          >
            <div className="flex items-center flex-1 gap-6">
              <Link to={target} className="flex items-center gap-6 group">
                <div className="w-28 h-28 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={item.images?.[0]}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-lg group-hover:text-red-600 transition-colors">{item.name}</h2>
                  <p className="text-red-600 font-semibold text-xl mt-1">₹{item.price}</p>
                  {item.flavour && (
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="font-medium">Flavour:</span> {item.flavour}
                    </p>
                  )}
                  {item.selectedFlavours && Object.keys(item.selectedFlavours).length > 0 && (
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="font-medium">Flavours:</span> {Object.values(item.selectedFlavours).filter(Boolean).join(", ")}
                    </p>
                  )}
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 bg-gray-100 rounded-lg px-4 py-2">
                <button
                  onClick={() => updateQty(item.cartKey || item.id, item.qty - 1)}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-md hover:bg-red-600 hover:text-white transition-colors font-bold"
                >
                  -
                </button>

                <span className="font-semibold text-lg w-8 text-center">{item.qty}</span>

                <button
                  onClick={() => updateQty(item.cartKey || item.id, item.qty + 1)}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-md hover:bg-red-600 hover:text-white transition-colors font-bold"
                >
                  +
                </button>
              </div>

              <p className="font-bold text-xl w-24 text-right">
                ₹{item.price * item.qty}
              </p>

              <button
                onClick={() => removeFromCart(item.cartKey || item.id)}
                className="px-5 py-2 rounded-lg bg-red-600 text-white font-semibold transition-all duration-200 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Remove
              </button>
            </div>
          </div>
          );
        })}
      </div>

      <div className="mt-10 bg-gray-50 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={clearCart} 
            className="text-red-600 font-semibold hover:text-red-700 hover:underline transition-all"
          >
            Clear Cart
          </button>
          <div className="text-right">
            <p className="text-gray-600 text-sm mb-1">Total Amount</p>
            <p className="text-3xl font-bold text-gray-900">
              ₹{totalAmount}
            </p>
          </div>
        </div>

        <button className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-200 hover:shadow-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
