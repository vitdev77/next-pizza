import * as React from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { cn } from "@/shared/lib";

interface Props {
  name: string;
  imageUrl: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientItem: React.FC<Props> = ({
  name,
  imageUrl,
  price,
  active,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-md w-full text-center relative cursor-pointer shadow-md bg-white",
        { "inset-ring-2 inset-ring-primary/50 shadow-none": active },
        className
      )}
      onClick={onClick}
    >
      {active && (
        <Check
          width={20}
          height={20}
          className="absolute top-1.5 right-1.5 text-primary"
        />
      )}
      <Image src={imageUrl} width={110} height={110} alt={name} />
      <span className="text-xs mb-1">{name}</span>
      <span className="font-bold">{price} ₽</span>
    </div>
  );
};
