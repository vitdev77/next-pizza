import { cn } from "@/shared/lib/utils";
import * as React from "react";
import { Title } from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";

interface Props {
  name: string;
  imageUrl: string;
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  onClickAdd,
  className,
}) => {
  const textDetails = "30 см, традиционное тесто 30";

  const totalPrice = 350;

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
        <p className="text-gray-400">{textDetails}</p>

        <Button className="h-[55px] px-10 text-base font-bold rounded-xl w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
