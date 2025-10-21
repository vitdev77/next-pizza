import { useSession } from 'next-auth/react';
import { Button, Skeleton } from '../ui';
import { ArrowBigDown, Loader, Loader2Icon, User2Icon } from 'lucide-react';

export default function MyTestComponent() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    // Display your skeleton loading state here
    return (
      // <Button variant={'ghost'} size={'icon'} disabled>
      //   <Loader2Icon className="animate-spin" />
      // </Button>
      <Skeleton className="size-9" />
    );
  }

  if (session) {
    // Render content for authenticated users
    return (
      <div>
        <Button size={'icon'} title={session.user.name}>
          <ArrowBigDown />
        </Button>
      </div>
    );
  }

  // Render content for unauthenticated users
  return (
    <div>
      <Button size={'icon'}>
        <User2Icon />
      </Button>
      {/* ... login button or other unauthenticated content */}
    </div>
  );
}
