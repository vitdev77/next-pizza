import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
  LogInIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import * as React from 'react';
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
} from '../ui';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface Props {
  onClickSignIn?: () => void;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({
  onClickSignIn,
  className,
}) => {
  const { data: session } = useSession();

  const onClickSignOut = async () => {
    await signOut({
      callbackUrl: '/',
      redirect: false,
    });
  };

  return (
    <div className={className}>
      {!session ? (
        <Button onClick={onClickSignIn}>
          <LogInIcon size={16} /> Войти
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 outline-0">
              <div className="flex items-center gap-2">
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
                  <span className="truncate font-bold">
                    {session?.user.name}
                  </span>
                  <span className="text-muted-foreground truncate text-xs">
                    {session?.user.role}
                  </span>
                </div>
              </div>

              <EllipsisVerticalIcon className="ml-auto size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-36 rounded-lg"
              align="end"
              sideOffset={8}
            >
              {/* <DropdownMenuLabel className="p-0 font-normal">
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
              <DropdownMenuSeparator /> */}
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

          {/* <span className="h-6 w-[1px] bg-black/10" />
          <Button variant={'ghost'} size={'icon'}>
            <LogOut />
          </Button> */}
        </div>
      )}
    </div>
  );
};
