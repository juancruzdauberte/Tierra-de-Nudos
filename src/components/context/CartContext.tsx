import { createContext, ReactNode, useContext, useState } from "react";
import { type ProductInCart, CartContextType } from "../types/type";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductInCart[]>([]);

  const addProductToCart = (product: ProductInCart) => {
    const productInCart = cart.some((p) => p.id === product.id);

    if (productInCart) {
      const newCart = cart.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            quantity: (p.quantity || 0) + (product.quantity || 1),
          };
        }
        return p;
      });

      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: product.quantity || 1 }]);
    }
  };

  const cartEmpty = () => {
    setCart([]);
  };

  const deleteProductToCart = (id: string) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const totalAmount = () => {
    const total = cart.reduce((acc, product) => {
      return acc + product.price * (product.quantity || 1);
    }, 0);
    return total;
  };

  const totalItemsInCart = () => {
    const total = cart.reduce((acc, product) => {
      return acc + (product.quantity || 1);
    }, 0);
    return total;
  };
  const value = {
    cart,
    cartEmpty,
    addProductToCart,
    deleteProductToCart,
    totalAmount,
    totalItemsInCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) throw new Error("Error al usar el contexto del carrito");
  return cartContext;
};
