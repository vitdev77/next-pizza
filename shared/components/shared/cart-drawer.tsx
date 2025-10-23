'use client';

import * as React from 'react';
import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CartDrawerItem } from './cart-drawer-item';
import { declOfNum, getCartItemDetails } from '@/shared/lib';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Image from 'next/image';
import { Title } from '@/shared/components/shared';
import { cn } from '@/shared/lib/utils';
import { useCart } from '@/shared/hooks';
import SlotCounter from 'react-slot-counter';

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();

  const [redirecting, setRedirecting] = React.useState(false);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <div
          className={cn(
            'flex flex-col h-full',
            !totalAmount && 'justify-center'
          )}
        >
          {totalAmount > 0 ? (
            <SheetHeader>
              <SheetTitle>
                В корзине{' '}
                <span className="font-bold">
                  {items.length}{' '}
                  {declOfNum(items.length, ['товар', 'товара', 'товаров'])}
                </span>
              </SheetTitle>
            </SheetHeader>
          ) : (
            <VisuallyHidden>
              <SheetHeader>
                <SheetTitle></SheetTitle>
              </SheetHeader>
            </VisuallyHidden>
          )}

          {!totalAmount && (
            <div className="flex flex-col items-center justify-center w-72 mx-auto">
              <Image
                src={'/assets/images/empty-box.png'}
                alt="Empty cart"
                width={120}
                height={120}
              />
              <Title
                size="sm"
                text="Корзина пустая"
                className="text-center font-bold my-2"
              />
              <p className="text-center text-neutral-500 mb-5">
                Добавьте хотя бы один товар, чтобы сделать заказ
              </p>

              <SheetClose asChild>
                <Button size={'lg'} className="text-base w-56 h-12">
                  <ArrowLeft width={20} height={20} /> Вернуться назад
                </Button>
              </SheetClose>
            </div>
          )}

          {totalAmount > 0 && (
            <>
              <div className="overflow-auto flex-1">
                {items.map((item) => (
                  <div key={item.id} className="mb-2">
                    <CartDrawerItem
                      id={item.id}
                      imageUrl={item.imageUrl}
                      details={getCartItemDetails(
                        item.ingredients,
                        item.pizzaType as PizzaType,
                        item.pizzaSize as PizzaSize
                      )}
                      disabled={item.disabled}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      onClickCountButton={(type) =>
                        onClickCountButton(item.id, item.quantity, type)
                      }
                      onClickRemove={() => removeCartItem(item.id)}
                    />
                  </div>
                ))}
              </div>

              <SheetFooter className="mx-0 bg-white px-4 py-8">
                <div className="flex mb-4">
                  <span className="flex flex-1 text-lg text-neutral-500">
                    Стоимость корзины
                    <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                  </span>

                  <span className="font-bold text-lg">
                    <SlotCounter value={totalAmount} /> ₽
                  </span>
                </div>

                <Link href="/checkout">
                  <Button
                    loading={redirecting}
                    onClick={() => setRedirecting(true)}
                    type="submit"
                    className="w-full h-12 text-base"
                  >
                    Оформить заказ <ArrowRight size={20} />
                  </Button>
                </Link>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
