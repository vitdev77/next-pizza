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
        "flex flex-col items-center p-1 rounded-md w-32 text-center relative cursor-pointer border border-transparent shadow-md bg-white",
        { "border-primary": active },
        className
      )}
      onClick={onClick}
    >
      {/* <div className="absolute top-1 right-1 p-0.5 bg-white rounded-sm">
        {active ? (
          <SquareCheckBig className="text-primary" />
        ) : (
          <SquareDashed className="text-secondary" />
        )}
      </div> */}
      {active && <Check className="absolute top-1 right-1 text-primary" />}
      <Image src={imageUrl} width={110} height={110} alt={name} />
      <span className="text-xs mb-1">{name}</span>
      <span className="font-bold">{price} ₽</span>
    </div>
  );
};
