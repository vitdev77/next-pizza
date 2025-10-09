"use client";

import * as React from "react";
import { Variant } from "../components/shared/group-variants";
import { PizzaSize, PizzaType } from "../constants/pizza";

export const useAvailablePizzaSize = (
  size: PizzaSize,
  type: PizzaType,
  availableSizes: Variant[]
) => {
  React.useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);
};
