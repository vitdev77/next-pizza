import * as React from 'react';
import {
  CheckoutItem,
  CheckoutItemSkeleton,
  WhiteBlock,
} from '@/shared/components';
import { getCartItemDetails } from '@/shared/lib';
import { PizzaSize, PizzaType } from '@/shared/constants';
import { CartStateItem } from '@/shared/lib/get-cart-details';
import Link from 'next/link';

interface Props {
  items: CartStateItem[];
  onClickCountButton: (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => void;
  removeCartItem: (id: number) => void;
  loading?: boolean;
  className?: string;
}

export const CheckoutCart: React.FC<Props> = ({
  items,
  onClickCountButton,
  removeCartItem,
  loading,
  className,
}) => {
  return (
    <WhiteBlock title="1. Корзина" className={className}>
      <div className="flex flex-col gap-5">
        {loading ? (
          [...Array(3)].map((_, index) => <CheckoutItemSkeleton key={index} />)
        ) : items.length > 0 ? (
          items.map((item) => (
            <CheckoutItem
              key={item.id}
              id={item.id}
              imageUrl={item.imageUrl}
              details={getCartItemDetails(
                item.ingredients,
                item.pizzaType as PizzaType,
                item.pizzaSize as PizzaSize
              )}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              disabled={item.disabled}
              onClickCountButton={(type) =>
                onClickCountButton(item.id, item.quantity, type)
              }
              onClickRemove={() => removeCartItem(item.id)}
            />
          ))
        ) : (
          <div className="text-sm">
            <div className="font-bold">Ваша корзина пуста</div>
            <div className="text-muted-foreground">
              Вернитесь на{' '}
              <Link className="text-primary hover:underline" href={'/'}>
                главную страницу
              </Link>
              , чтобы выбрать товары для заказа.
            </div>
          </div>
        )}
      </div>
    </WhiteBlock>
  );
};
