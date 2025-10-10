"use client";

import * as React from "react";
import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "@/shared/components/shared";
import { getCartItemDetails } from "@/shared/lib";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="overflow-auto flex-1">
          <div className="mb-2">
            <CartDrawerItem
              id={1}
              imageUrl={"/logo.svg"}
              details={getCartItemDetails(2, 30, [
                { name: "Цыпленок" },
                { name: "Сыр" },
              ])}
              name={"Чоризо фреш"}
              price={260}
              quantity={1}
            />
          </div>
        </div>

        <SheetFooter className="mx-0 bg-white px-4 py-8">
          <div className="flex mb-4">
            <span className="flex flex-1 text-lg text-neutral-500">
              Итого
              <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
            </span>

            <span className="font-bold text-lg">520 ₽</span>
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
