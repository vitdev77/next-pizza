"use client";

import { cn } from "@/shared/lib/utils";
import * as React from "react";
import { Button } from "@/shared/components/ui";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { CartDrawer } from "@/shared/components/shared";
import { useCartStore } from "@/shared/store";

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const { totalAmount, items, loading } = useCartStore((state) => state);

  return (
    <CartDrawer>
      <Button
        loading={loading}
        className={cn("group relative", { "w-[52.41px]": loading }, className)}
      >
        {totalAmount > 0 && (
          <>
            <b>{totalAmount} ₽</b>
            <span className="h-full w-[1px] bg-white/30 mx-3" />
          </>
        )}
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="relative" />
          <b>{items.length}</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </CartDrawer>
  );
};
