import * as React from "react";
import { cn } from "@/shared/lib/utils";
import {
  GroupVariants,
  Ingredient,
  PizzaImage,
  Title,
} from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";
import { ProductWithRelations } from "@/@types/prisma";
import {
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";

interface Props {
  name: string;
  imageUrl: string;
  ingredients: ProductWithRelations["ingredients"];
  items?: ProductWithRelations["items"];
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  imageUrl,
  ingredients,
  items,
  onClickAdd,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(30);
  const [type, setType] = React.useState<PizzaType>(1);

  const textDetails = "30 см, традиционное тесто 30";
  const totalPrice = 350;

  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex flex-1 items-center justify-center relative w-full">
        <PizzaImage imageUrl={imageUrl} size={size} />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-1 mt-5">
          <GroupVariants
            items={pizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="grid grid-cols-3 gap-3 mt-5">
          {ingredients.map((ingredient) => (
            <Ingredient key={ingredient.id} />
          ))}
        </div>

        <Button className="h-[55px] px-10 text-base font-bold rounded-xl w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
