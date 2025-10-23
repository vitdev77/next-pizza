'use client';

import { cn } from '@/shared/lib/utils';
import * as React from 'react';
import { Button } from '@/shared/components/ui';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { CartDrawer } from '@/shared/components/shared';
import { useCartStore } from '@/shared/store';
import SlotCounter from 'react-slot-counter';

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const { totalAmount, items, loading } = useCartStore((state) => state);

  return (
    <CartDrawer>
      <Button
        loading={loading}
        className={cn('group relative', { 'w-10': loading }, className)}
      >
        {totalAmount > 0 && (
          <>
            <span className="font-bold">
              <SlotCounter value={totalAmount} /> ₽
            </span>
            <span className="h-full w-px bg-white/50 mx-2" />
          </>
        )}
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart className="relative" />
          {totalAmount > 0 && <span className="font-bold">{items.length}</span>}
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
