import * as React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import {
  EllipsisVerticalIcon,
  LogInIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Skeleton,
} from '@/shared/components';
import { cn } from '@/shared/lib';

interface Props {
  onClickSignIn?: () => void;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({
  onClickSignIn,
  className,
}) => {
  const { data: session, status } = useSession();

  const onClickSignOut = async () => {
    await signOut({
      callbackUrl: '/',
    });
  };

  return (
    <div className={cn('flex items-center relative', className)}>
      {status === 'loading' && (
        <Skeleton className="h-9 w-14 absolute top-0 left-0" />
      )}
      {!session ? (
        <Button
          variant={'secondary'}
          className={cn(
            'w-14 opacity-100 transition-opacity delay-100',
            {
              'opacity-0 pointer-events-none ': status === 'loading',
            },
            className
          )}
          onClick={onClickSignIn}
        >
          <LogInIcon />
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 outline-none">
              <Avatar className="size-9 rounded-lg">
                <AvatarImage
                  src={session?.user.image}
                  alt={session?.user.name}
                />
                <AvatarFallback className="font-bold rounded-lg">
                  {session?.user.name[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <EllipsisVerticalIcon className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-42 rounded-lg"
              align="end"
              sideOffset={8}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src={session?.user.image}
                      alt={session?.user.name}
                    />
                    <AvatarFallback className="font-bold rounded-lg">
                      {session?.user.name[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">
                      {session?.user.name}
                    </span>
                    <span className="text-muted-foreground truncate text-xs">
                      {session?.user.role}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href={'/profile'}>
                    <UserIcon />
                    Профиль
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={'/settings'}>
                    <SettingsIcon />
                    Настройки
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onClickSignOut}>
                <LogOutIcon />
                Выход
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};
