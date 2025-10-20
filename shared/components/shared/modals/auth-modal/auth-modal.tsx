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
          <Title
            text={type === 'login' ? 'Вход в аккаунт' : 'Регистрация'}
            size="md"
            className="font-bold text-center"
          />
          <Field className="grid grid-cols-2 gap-4">
            <Button
              onClick={() =>
                signIn('github', {
                  // callbackUrl: '/',
                  redirect: false,
                })
              }
              variant={'secondary'}
              type="button"
              className="flex-1"
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
                  // callbackUrl: '/',
                  redirect: false,
                })
              }
              variant={'secondary'}
              type="button"
              className="flex-1"
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
          <FieldSeparator>или</FieldSeparator>
          <p className="text-muted-foreground text-sm text-balance text-center">
            {type === 'login'
              ? 'укажите адрес электронной почты и пароль для входа в аккаунт.'
              : 'укажите полное имя, адрес электронной почты и пароль для регистрации на сайте.'}
          </p>
          <Field>
            {type === 'login' ? (
              <LoginForm onClose={handleClose} />
            ) : (
              <RegisterForm />
            )}
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
