import { cn } from "@/lib/utils";
import * as React from "react";
import { ProductImage, Title } from "@/components/shared";

interface Props {
  imageUrl: string;
  name: string;
  // ingredients: IProduct["ingredients"];
  // items?: IProduct["items"];
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  onClickAdd,
  className,
}) => {
  const textDetails = "30 см, традиционное тесто 30";

  return (
    <div className={cn("flex flex-1", className)}>
      <ProductImage imageUrl={imageUrl} size={30} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
      </div>
    </div>
  );
};
