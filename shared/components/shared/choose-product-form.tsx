import * as React from "react";
import { Button, Title } from "@/shared/components";
import { cn } from "@/shared/lib";

interface Props {
  name: string;
  imageUrl: string;
  price: number;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
}

/**
 * Форма выбора ПРОДУКТА
 */
export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  price,
  loading,
  onSubmit,
  className,
}) => {
  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex flex-1 items-center justify-center relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="w-[350px] h-[350px] relative left-2 top-2 transition-all duration-300 z-10"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="h-[55px] px-10 text-base font-bold rounded-xl w-full mt-5"
        >
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
