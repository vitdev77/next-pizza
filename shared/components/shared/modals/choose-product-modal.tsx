"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ProductForm } from "@/shared/components/shared";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ProductWithRelations } from "@/@types/prisma";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  const onCloseModal = () => {
    router.back();
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={onCloseModal}>
      <DialogContent
        aria-describedby={undefined}
        className={cn(
          "p-0 w-[1060px] min-w-[1060px] min-h-[520px] bg-white overflow-hidden",
          className
        )}
      >
        <VisuallyHidden>
          <DialogTitle>{product.name}</DialogTitle>
        </VisuallyHidden>

        <ProductForm product={product} _onSubmit={onCloseModal} />
      </DialogContent>
    </Dialog>
  );
};
