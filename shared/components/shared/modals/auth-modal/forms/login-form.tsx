'use client';

import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formLoginSchema, TFormLoginValues } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormInput, Title } from '@/shared/components';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

interface Props {
  onClose?: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (!resp?.ok) {
        throw Error();
      }

      onClose?.();

      toast.success('Вы успешно вошли в аккаунт.');
    } catch (error) {
      console.error('[LOGIN] Error', error);
      toast.error('Не удалось войти в аккаунт');
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* <div className="flex items-center justify-between">
          <div className="mr-2">
            <Title text="Вход в аккаунт" size="md" className="font-bold" />
            <p className="text-muted-foreground text-sm text-balance">
              Укажите адрес Вашей электронной почты и пароль для входа в
              аккаунт.
            </p>
          </div>
          <Image
            src={'/assets/images/phone-icon.png'}
            width={60}
            height={60}
            alt="phone-icon"
          />
        </div> */}

        <FormInput
          name="email"
          label="E-mail"
          type="email"
          placeholder="Ваш E-mail"
          required
        />
        <FormInput
          name="password"
          label="Пароль"
          type="password"
          placeholder="Ваш пароль"
          required
        />

        <Button
          loading={form.formState.isSubmitting}
          type="submit"
          className="h-12 text-base"
        >
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};
