import { cn } from '@/shared/lib';
import SlotCounter from 'react-slot-counter';

interface Props {
  value: number;
  className?: string;
}

export const CartItemDetailsPrice: React.FC<Props> = ({ value, className }) => {
  return (
    <h2 className={cn('font-bold', className)}>
      <SlotCounter value={value} /> ₽
    </h2>
  );
};
