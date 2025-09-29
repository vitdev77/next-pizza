"use client";

import * as React from "react";
import { Ingredient } from "@prisma/client";
import { Api } from "@/services/api-client";
import { useSet } from "react-use";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIngredients: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();

    // Вариант записи
    // Api.ingredients
    //   .getAll()
    //   .then((data) => (setLoading(true), setIngredients(data)))
    //   .catch((error) => console.log(error))
    //   .finally(() => setLoading(false));
  }, []);

  return {
    ingredients,
    loading,
    selectedIngredients: selectedIds,
    onAddId: toggle,
  };
};
