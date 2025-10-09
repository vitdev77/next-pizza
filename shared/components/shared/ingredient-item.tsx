import * as React from "react";
import { cn } from "@/shared/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

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
        { "inset-ring-2 inset-ring-primary shadow-none": active },
        className
      )}
      onClick={onClick}
    >
      {active && (
        <Check
          width={16}
          height={16}
          className="absolute top-2 right-2 text-primary"
        />
      )}
      <Image src={imageUrl} width={110} height={110} alt={name} />
      <span className="text-xs mb-1">{name}</span>
      <span className="font-bold">{price} ₽</span>
    </div>
  );
};
