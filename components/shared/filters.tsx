"use client";

import * as React from "react";
import { Title, CheckboxFiltersGroup } from "@/components/shared";
import { Input, Label, RangeSlider } from "@/components/ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, selectedIngredients, onAddId } =
    useFilterIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>());
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>());

  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices({
      ...prices,
      [name]: value,
    });
  };

  React.useEffect(() => {
    console.log({ prices, pizzaTypes, sizes, selectedIngredients });
  }, [prices, pizzaTypes, sizes, selectedIngredients]);

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={togglePizzaTypes}
        selected={pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />
      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />

      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена, руб.</p>
        <div className="flex gap-3 mb-5">
          <div className="w-full flex flex-col gap-2">
            <Label htmlFor="1" className="text-muted-foreground">
              От
            </Label>
            <Input
              type="number"
              id="1"
              placeholder="0"
              min={0}
              max={1000}
              value={String(prices.priceFrom)}
              onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Label htmlFor="2" className="text-muted-foreground">
              До
            </Label>
            <Input
              type="number"
              id="2"
              placeholder="1000"
              min={100}
              max={1000}
              value={String(prices.priceTo)}
              onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
            />
          </div>
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrices({ priceFrom, priceTo })
          }
        />
      </div>

      {/* Нижние чекбоксы */}
      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={5}
        loading={loading}
        defaultItems={items.slice(0, 5)}
        items={items}
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
      />
    </div>
  );
};
