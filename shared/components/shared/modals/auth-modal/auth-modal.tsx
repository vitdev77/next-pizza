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

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
        </VisuallyHidden>
        <FieldGroup>
          <div className="flex flex-col items-center gap-1 text-center">
            <Title text="Вход в аккаунт" size="md" className="font-bold" />
            <p className="text-muted-foreground text-sm text-balance">
              Укажите адрес Вашей электронной почты и пароль для входа в
              аккаунт.
            </p>
          </div>

          <Field>FORM</Field>
          <FieldSeparator>или войдите через</FieldSeparator>
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
                src={'https://github.githubassets.com/favicons/favicon.svg'}
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
                src={
                  'https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg'
                }
                alt="Google Logo"
              />{' '}
              Google
            </Button>
          </Field>
        </FieldGroup>
      </DialogContent>
    </Dialog>
  );
};
