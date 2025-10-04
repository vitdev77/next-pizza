"use client";

import * as React from "react";
import { Title, CheckboxFiltersGroup, RangeSlider } from "@/components/shared";
import { Input, Label } from "@/components/ui";
import { useQueryFilters, useIngredients, useFilters } from "@/hooks";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />
      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
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
              value={String(filters.prices.priceFrom)}
              onChange={(e) =>
                filters.setPrices("priceFrom", Number(e.target.value))
              }
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
              value={String(filters.prices.priceTo)}
              onChange={(e) =>
                filters.setPrices("priceTo", Number(e.target.value))
              }
            />
          </div>
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrices}
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
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
