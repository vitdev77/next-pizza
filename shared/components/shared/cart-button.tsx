'use client';

import { cn } from '@/shared/lib/utils';
import * as React from 'react';
import { Button } from '@/shared/components/ui';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { CartDrawer } from '@/shared/components/shared';
import { useCartStore } from '@/shared/store';

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const { totalAmount, items, loading } = useCartStore((state) => state);

  return (
    <CartDrawer>
      <Button
        variant={'secondary'}
        loading={loading}
        className={cn('group relative', { 'w-10': loading }, className)}
      >
        {totalAmount > 0 && (
          <>
            <b>{totalAmount} ₽</b>
            <span className="h-4 w-[1px] bg-black/30 mx-2" />
          </>
        )}
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart className="relative" />
          {totalAmount > 0 && <b>{items.length}</b>}
        </div>
        <ArrowRight
          className={cn(
            'absolute right-3 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0',
            { 'right-5': totalAmount > 0 },
            className
          )}
        />
      </Button>
    </CartDrawer>
  );
};
