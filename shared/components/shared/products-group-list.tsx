'use client';

import * as React from 'react';
import { useIntersection } from 'react-use';
import { ProductCard, Title } from '@/shared/components';
import { cn } from '@/shared/lib';
import { useCategoryStore } from '@/shared/store';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  title: string;
  categoryId: number;
  items: ProductWithRelations[];
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
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef<HTMLDivElement>(null!);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    intersection?.isIntersecting && setActiveCategoryId(categoryId);
  }, [title, categoryId, intersection?.isIntersecting]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
