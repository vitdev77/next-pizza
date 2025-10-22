import * as React from 'react';
import { cn } from '@/shared/lib';
import { Skeleton } from '@/shared/components';

interface Props {
  className?: string;
}

export const CheckoutItemSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-between gap-4', className)}>
      <div className="flex items-center gap-5">
        <Skeleton className="size-15 rounded-full" />
        <Skeleton className="w-72 h-5" />
      </div>
      <Skeleton className="w-12 h-5" />
      <Skeleton className="w-[146px] h-8" />
    </div>
  );
};
