'use client';

import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  formRegisterSchema,
  TFormRegisterValues,
} from './modals/auth-modal/forms/schemas';
import { User } from '@prisma/client';
import toast from 'react-hot-toast';
// import { signOut } from 'next-auth/react';
import { Container, FormInput, Title } from '.';
import { Button } from '..';
import { updateUserInfo } from '@/app/actions';

interface Props {
  data: User;
}

export const ProfileForm: React.FC<Props> = ({ data }) => {
  const form = useForm({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.success('Данные успешно обновлены.');
    } catch (error) {
      toast.error('Ошибка при обновлении данных.');
    }
  };

  // const onClickSignOut = () => {
  //   signOut({
  //     callbackUrl: '/',
  //   });
  // };
  return (
    <Container className="my-10">
      <Title
        text={`Личные данные | User #${data.id}`}
        size="md"
        className="font-bold"
      />

      <FormProvider {...form}>
        <form
          className="flex flex-col gap-5 w-96 mt-10"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInput
            type="email"
            name="email"
            label="E-Mail"
            placeholder="user@example.com"
            required
          />
          <FormInput
            type="text"
            name="fullName"
            label="Полное имя"
            placeholder="John Doe"
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Новый пароль"
            placeholder="••••••••"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Повторите пароль"
            placeholder="••••••••"
            required
          />

          <Button
            disabled={form.formState.isSubmitting}
            className="text-base h-12"
            type="submit"
          >
            Сохранить
          </Button>

          {/* <Button
            onClick={onClickSignOut}
            disabled={form.formState.isSubmitting}
            variant={'secondary'}
            className="text-base"
            type="button"
          >
            Выйти
          </Button> */}
        </form>
      </FormProvider>
    </Container>
  );
};
