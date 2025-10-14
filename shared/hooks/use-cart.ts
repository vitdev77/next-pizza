import * as React from "react";
import { CreateCartItemValues } from "../services/dto/cart.dto";
import { CartStateItem } from "../lib/get-cart-details";
import { useCartStore } from "../store";

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): ReturnProps => {
  // const {
  //   totalAmount,
  //   items,
  //   loading,
  //   fetchCartItems,
  //   updateItemQuantity,
  //   removeCartItem,
  //   addCartItem,
  // } = useCartStore((state) => state);

  // React.useEffect(() => {
  //   fetchCartItems();
  // }, []);

  // return {
  //   totalAmount,
  //   items,
  //   loading,
  //   updateItemQuantity,
  //   removeCartItem,
  //   addCartItem,
  // };

  // Более оптимизированный вариант записи выше
  const cartState = useCartStore((state) => state);

  React.useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
