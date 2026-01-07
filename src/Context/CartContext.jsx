import { createContext, useContext, useState } from "react";

// Create context
const CartContext = createContext(null);

// Provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const flavourPart = (product.flavour || product.selectedFlavours)
      ? JSON.stringify(product.flavour || product.selectedFlavours)
      : null;

    const cartKey = flavourPart ? `${product.id}-${flavourPart}` : product.id;

    setCart((prev) => {
      const exists = prev.find(
        (item) => (item.cartKey || item.id) === cartKey
      );

      if (exists) {
        return prev.map((item) =>
          (item.cartKey || item.id) === cartKey
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, cartKey, qty: 1 }];
    });
  };

  const removeFromCart = (key) => {
    setCart((prev) =>
      prev.filter((item) => (item.cartKey || item.id) !== key)
    );
  };

  const updateQty = (key, qty) => {
    if (qty <= 0) return;

    setCart((prev) =>
      prev.map((item) =>
        (item.cartKey || item.id) === key ? { ...item, qty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
