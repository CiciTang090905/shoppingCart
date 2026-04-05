import { createContext } from "react";
import type { Product } from "@/api/types";
import type { CartItem } from "@/reducers/cart-reducer";

//everything the cart makes available to consumers: the list of items, four action functions, and two computed totals.
export type CartContextValue = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

export const CartContext = createContext<CartContextValue | null>(null);
//createContext solves prop drilling by allowing us to pass data through the component tree without having to pass props down manually at every level.
