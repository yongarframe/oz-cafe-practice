import { createContext, useContext, useState } from "react";

const contextCart = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function cartRemove(id) {
    setCart(cart.filter((el) => id !== el.id));
  }

  function cartAdd(options, quantity, id) {
    setCart([...cart, { options, quantity, id }]);
  }

  return (
    <contextCart.Provider value={{ cart, setCart, cartRemove, cartAdd }}>
      {children}
    </contextCart.Provider>
  );
}

export function useCart() {
  return useContext(contextCart);
}
