import { LogInIcon, User } from 'lucide-react';
import { useSession } from 'next-auth/react';
import * as React from 'react';
import { Button } from '../ui';
import Link from 'next/link';

interface Props {
  onClickSignIn?: () => void;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({
  onClickSignIn,
  className,
}) => {
  const { data: session } = useSession();

  return (
    <div className={className}>
      {!session ? (
        <Button onClick={onClickSignIn} variant={'outline'}>
          <LogInIcon size={16} /> Вход
        </Button>
      ) : (
        <Link href={'/profile'}>
          <Button variant={'secondary'}>
            <User size={16} /> {session.user?.name}
          </Button>
        </Link>
      )}
    </div>
  );
};
