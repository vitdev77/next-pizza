'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import {
  AuthModal,
  CartButton,
  Container,
  ProfileButton,
  SearchInput,
} from '@/shared/components';
import { cn } from '@/shared/lib';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: String;
}

const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  const [openAuthModal, setOpenAuthModal] = React.useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    if (searchParams.has('paid')) {
      toast.success(
        'Оплата прошла успешно! \n\Информация о заказе отправлена на Ваш адрес электронной почты.',
        { duration: 5000 }
      );
      router.push('/');
    }
  }, []);

  return (
    <header className={cn('border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <Link href={'/'}>
          <div className="flex items-center gap-4">
            <Image src={'/logo.svg'} alt="Logo" width={42} height={42} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />

          {hasCart && <CartButton />}

          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
        </div>
      </Container>
    </header>
  );
};

export { Header };
