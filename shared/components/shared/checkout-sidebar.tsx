import * as React from 'react';
import {
  ArrowRight,
  LockIcon,
  LockKeyholeIcon,
  Package,
  Percent,
  Truck,
} from 'lucide-react';
import {
  Button,
  CheckoutItemDetails,
  Skeleton,
  WhiteBlock,
} from '@/shared/components';
import { cn } from '@/shared/lib';

interface Props {
  totalAmount: number;
  loading?: boolean;
  className?: string;
}

const VAT = 15;
let DELIVERY_PRICE = 250;

export const CheckoutSidebar: React.FC<Props> = ({
  totalAmount,
  loading,
  className,
}) => {
  const vatPrice = (totalAmount * VAT) / 100 || 0;
  const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;
  return (
    <WhiteBlock className={cn('p-6 sticky top-4', className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        {loading ? (
          <Skeleton className="w-1/2 h-[47px] mt-1 animate-pulse" />
        ) : (
          <span className="text-[34px] font-extrabold">
            {totalAmount > 0 ? totalPrice : '0'} ₽
          </span>
        )}
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center gap-2">
            <Package size={18} className="text-gray-400" />
            Стоимость корзины:
          </div>
        }
        value={loading ? <Skeleton className="h-7 w-20" /> : `${totalAmount} ₽`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center gap-2">
            <Percent size={18} className="text-gray-400" />
            Налоги:
          </div>
        }
        value={loading ? <Skeleton className="h-7 w-15" /> : `${vatPrice} ₽`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center gap-2">
            <Truck size={18} className="text-gray-400" />
            Доставка:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-7 w-18" />
          ) : (
            `${totalAmount > 0 ? DELIVERY_PRICE : '0'} ₽`
          )
        }
      />

      <Button
        disabled={totalAmount === 0}
        type="submit"
        size={'lg'}
        loading={loading}
        className={cn(
          'w-full h-14 text-base font-bold mt-6',
          { 'pointer-events-none': loading || totalAmount === 0 },
          className
        )}
      >
        Перейти к оплате{' '}
        {totalAmount === 0 ? (
          <LockKeyholeIcon className="size-5" />
        ) : (
          <ArrowRight className="size-5" />
        )}
      </Button>
    </WhiteBlock>
  );
};
