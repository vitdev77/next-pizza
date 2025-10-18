'use client';

import * as React from 'react';
// import { Button } from '@/shared/components/ui';
import { ArrowUpToLine } from 'lucide-react';
// import { useRouter } from 'next/navigation';

export const ToTopButton: React.FC = () => {
  // const router = useRouter();
  const [visible, setVisible] = React.useState(false);

  const handleVisibilityChange = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleVisibilityChange);
  }, []);

  const clickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // router.push('/');
  };
  return (
    <>
      {visible ? (
        // <Button
        //   onClick={clickHandler}
        //   variant={'ghost'}
        //   size={'icon-lg'}
        //   className="sticky left-5 bottom-1/2 translate-y-1/2 cursor-pointer opacity-25 hover:opacity-100 invisible md:visible"
        //   title="Scroll to top"
        // >
        //   <ArrowUpToLine />
        // </Button>
        <div
          onClick={clickHandler}
          className="group fixed z-10 left-0 top-0 bottom-0 min-h-screen w-20 hover:bg-gray-200/20 transition-all cursor-pointer flex items-center justify-center"
        >
          <ArrowUpToLine
            size={32}
            className="text-gray-600 opacity-25 transition-all group-hover:opacity-100"
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
};
