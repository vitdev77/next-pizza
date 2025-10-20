import * as React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/shared/components';
import { cn } from '@/shared/lib';

interface Props {
  onClick?: VoidFunction;
  className?: string;
}

export const ClearButton: React.FC<Props> = ({ onClick, className }) => {
  return (
    <Button
      variant={'link'}
      size={'icon-sm'}
      onClick={onClick}
      className={cn(
        'absolute right-1 top-4.5 -translate-y-1/2 text-gray-400 hover:text-gray-600',
        className
      )}
      tabIndex={-1}
    >
      <X />
    </Button>
  );
};
