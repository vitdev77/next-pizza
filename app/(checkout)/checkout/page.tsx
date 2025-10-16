'use client';

import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutSidebar,
  Container,
  Title,
} from '@/shared/components';
import { checkoutFormSchema, CheckoutFormValues } from '@/shared/constants';
import { useCart } from '@/shared/hooks';
import { createOrder } from '@/app/actions';
import toast from 'react-hot-toast';

export default function CheckoutPage() {
  const [submitting, setSubmitting] = React.useState(false);

  const { totalAmount, items, updateItemQuantity, removeCartItem, loading } =
    useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: 'Ivan',
      lastName: 'Ivanov',
      email: 'ivan@test.ru',
      phone: '1234567890',
      address: 'Moscow',
      comment: 'Lorem',
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setSubmitting(true);

      const url = await createOrder(data);

      toast.success('Супер! \nПочти все готово...');
      if (url) {
        setTimeout(() => (location.href = url), 1000);
      }
    } catch (err) {
      console.error(err);
      setSubmitting(false);
      toast.error('Не удалось создать заказ');
    }
  };

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* Левая часть */}
            <div className="flex flex-col flex-1 mb-20 gap-10">
              <CheckoutCart
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                loading={loading}
              />
              <CheckoutPersonalForm
                className={loading ? 'pointer-events-none' : ''}
                loading={loading}
              />
              <CheckoutAddressForm
                className={loading ? 'pointer-events-none' : ''}
                loading={loading}
              />
            </div>

            {/* Правая часть */}
            <div className="w-[450px]">
              <CheckoutSidebar
                totalAmount={totalAmount}
                loading={loading || submitting}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
