import { Minus, Plus } from 'lucide-react';
import { Button } from '@/shared/components';
import { CountButtonProps } from './count-button';
import { cn } from '@/shared/lib';

interface IconButtonProps {
  size?: CountButtonProps['size'];
  disabled?: boolean;
  type?: 'plus' | 'minus';
  onClick?: () => void;
}

export const CountIconButton: React.FC<IconButtonProps> = ({
  size = 'sm',
  disabled,
  type,
  onClick,
}) => {
  return (
    <Button
      variant="outline"
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={cn(
        'p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-300 disabled:text-gray-300 disabled:pointer-events-none',
        size === 'sm'
          ? 'w-[30px] h-[30px] rounded-[10px]'
          : 'w-[38px] h-[38px] rounded-md'
      )}
    >
      {type === 'plus' ? (
        <Plus className={size === 'sm' ? 'h-4' : 'h-5'} />
      ) : (
        <Minus className={size === 'sm' ? 'h-4' : 'h-5'} />
      )}
    </Button>
  );
};
