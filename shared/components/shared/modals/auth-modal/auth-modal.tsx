'use client';

import * as React from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/components/ui';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/shared/components/ui';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Title } from '../../title';
import { LoginForm } from './forms/login-form';
import { RegisterForm } from './forms/register-form';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const [type, setType] = React.useState<'login' | 'register'>('login');

  const onSwitchType = () => {
    setType(type === 'login' ? 'register' : 'login');
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>Authentication</DialogTitle>
          </DialogHeader>
        </VisuallyHidden>
        <FieldGroup>
          <div className="flex flex-col items-center gap-1 text-center">
            <Title
              text={type === 'login' ? 'Вход в аккаунт' : 'Регистрация'}
              size="md"
              className="font-bold"
            />
            <p className="text-muted-foreground text-sm text-balance">
              {type === 'login'
                ? 'Укажите адрес электронной почты и пароль для входа в аккаунт.'
                : 'Укажите полное имя, адрес электронной почты и пароль для регистрации на сайте.'}
            </p>
          </div>

          <Field>
            {type === 'login' ? (
              <LoginForm onClose={handleClose} />
            ) : (
              <RegisterForm />
            )}
          </Field>
          <FieldSeparator>или</FieldSeparator>
          <Field className="grid grid-cols-2 gap-4">
            <Button
              onClick={() =>
                signIn('github', {
                  callbackUrl: '/',
                  redirect: true,
                })
              }
              variant={'secondary'}
              type="button"
              className="flex-1 cursor-pointer"
              size={'lg'}
            >
              <Image
                height={24}
                width={24}
                src={'https://authjs.dev/img/providers/github.svg'}
                alt="GitHub Logo"
              />{' '}
              GitHub
            </Button>

            <Button
              onClick={() =>
                signIn('google', {
                  callbackUrl: '/',
                  redirect: true,
                })
              }
              variant={'secondary'}
              type="button"
              className="flex-1 cursor-pointer"
              size={'lg'}
            >
              <Image
                height={24}
                width={24}
                src={'https://authjs.dev/img/providers/google.svg'}
                alt="Google Logo"
              />{' '}
              Google
            </Button>
          </Field>
          <FieldSeparator>
            {type !== 'login' ? 'Уже есть аккаунт?' : 'Еще нет аккаунта?'}
          </FieldSeparator>
          <Button
            variant={'outline'}
            onClick={onSwitchType}
            type="button"
            className="h-12"
          >
            {type !== 'login' ? 'Войти' : 'Регистрация'}
          </Button>
        </FieldGroup>
      </DialogContent>
    </Dialog>
  );
};
