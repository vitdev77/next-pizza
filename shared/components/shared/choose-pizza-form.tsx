import * as React from "react";
import { cn } from "@/shared/lib/utils";
import {
  GroupVariants,
  IngredientItem,
  PizzaImage,
  Title,
} from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { useSet } from "react-use";
import { Ingredient, ProductItem } from "@prisma/client";
import { calcTotalPizzaPrice, getAvailablePizzaSizes } from "@/shared/lib";

interface Props {
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  imageUrl,
  ingredients,
  items,
  onClickAddCart,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;

  const availablePizzaSizes = getAvailablePizzaSizes(type, items);

  /**/

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({ size, type, ingredients: selectedIngredients });
  };

  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex flex-1 items-center justify-center relative w-full">
        <PizzaImage imageUrl={imageUrl} size={size} />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-1 my-5">
          <GroupVariants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-[#F3F3F7] p-5 rounded-md h-[412px] overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                imageUrl={ingredient.imageUrl}
                price={ingredient.price}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          className="h-[55px] px-10 text-base font-bold rounded-xl w-full mt-10"
          onClick={handleClickAdd}
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
