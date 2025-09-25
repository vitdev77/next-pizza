"use client";

import * as React from "react";
import { useIntersection } from "react-use";

import { ProductCard, Title } from "@/components/shared";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  categoryId: number;
  items: any[];
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  categoryId,
  items,
  className,
  listClassName,
}) => {
  const intersectionRef = React.useRef<any>(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId);
    }
  }, [title, categoryId, intersection?.isIntersecting]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
