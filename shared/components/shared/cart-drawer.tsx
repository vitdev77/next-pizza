"use client";

import * as React from "react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "@/shared/lib";
import { useCartStore } from "@/shared/store";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  // Эта запись (как у автора на 11:47 минуте) выдает бесконечный цикл:
  // const [totalAmount, items, fetchCartItems, updateItemQuantity, removeCartItem] = useCartStore((state) => [
  //   state.totalAmount,
  //   state.items,
  //   state.fetchCartItems,
  //   state.updateItemQuantity,
  //   state.removeCartItem,
  // ]);

  // Без ошибок будет такая запись:
  const {
    totalAmount,
    items,
    fetchCartItems,
    updateItemQuantity,
    removeCartItem,
  } = useCartStore((state) => state);
  // Можно и так (2-й вариант):
  // const totalAmount = useCartStore((state) => state.totalAmount);
  // const items = useCartStore((state) => state.items);
  // const fetchCartItems = useCartStore((state) => state.fetchCartItems);
  // const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);
  // const removeCartItem = useCartStore((state) => state.removeCartItem);

  React.useEffect(() => {
    fetchCartItems();
  }, []);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">{items.length} товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="overflow-auto flex-1">
          {items.map((item) => (
            <div key={item.id} className="mb-2">
              <CartDrawerItem
                id={item.id}
                imageUrl={item.imageUrl}
                details={
                  item.pizzaType && item.pizzaSize
                    ? getCartItemDetails(
                        item.ingredients,
                        item.pizzaType as PizzaType,
                        item.pizzaSize as PizzaSize
                      )
                    : ""
                }
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                onClickCountButton={(type) =>
                  onClickCountButton(item.id, item.quantity, type)
                }
                onClickRemove={() => removeCartItem(item.id)}
              />
            </div>
          ))}
        </div>

        <SheetFooter className="mx-0 bg-white px-4 py-8">
          <div className="flex mb-4">
            <span className="flex flex-1 text-lg text-neutral-500">
              Итого
              <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
            </span>

            <span className="font-bold text-lg">{totalAmount} ₽</span>
          </div>

          <Link href={"/cart"}>
            <Button type="submit" className="w-full h-12 text-base">
              Оформить заказ <ArrowRight size={20} />
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
