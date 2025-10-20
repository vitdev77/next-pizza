'use client';

import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formRegisterSchema, TFormRegisterValues } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormInput } from '@/shared/components';
import toast from 'react-hot-toast';
import { registerUser } from '@/app/actions';

interface Props {
  onClose?: VoidFunction;
}

export const RegisterForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      onClose?.();

      toast.success(
        'Регистрация прошла успешно. Пожалуйста, подтвердите свою почту.'
      );
    } catch (error) {
      console.error('[REGISTER] Error', error);
      toast.error('Не удалось создать аккаунт');
    }
  };

  console.log(form.formState);

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormInput
          name="email"
          label="E-mail"
          type="email"
          placeholder="Ваш E-mail"
          required
        />

        <FormInput
          name="fullName"
          label="Имя и фамилия"
          type="text"
          placeholder="Ваше имя и фамилия"
          required
        />
        <FormInput
          name="password"
          label="Пароль"
          type="password"
          placeholder="Ваш пароль"
          required
        />
        <FormInput
          name="confirmPassword"
          label="Пароль еще раз"
          type="password"
          placeholder="Подтвердите пароль"
          required
        />
        <Button
          loading={form.formState.isSubmitting}
          type="submit"
          className="h-12 text-base"
        >
          Создать аккаунт
        </Button>
      </form>
    </FormProvider>
  );
};
