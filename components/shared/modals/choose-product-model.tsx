import * as React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui";
import { Product } from "@prisma/client";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModel: React.FC<Props> = ({ product, className }) => {
  return (
    <Dialog open={Boolean(product)}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white",
          className
        )}
      >
        <DialogTitle>{product.name}</DialogTitle>
      </DialogContent>
    </Dialog>
  );
};
