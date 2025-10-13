import { prisma } from "@/prisma/prisma-client";

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  pizzaTypes?: string;
  ingredients?: string;
  priceFrom?: string;
  priceTo?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000;

export const findPizzas = async (params: GetSearchParams) => {
  const { sizes, pizzaTypes, ingredients, priceFrom, priceTo } = await params;
  const _sizes = sizes?.split(",").map(Number);
  const _pizzaTypes = pizzaTypes?.split(",").map(Number);
  const ingredientsIdArr = ingredients?.split(",").map(Number);

  const _minPrice = Number(priceFrom) || DEFAULT_MIN_PRICE;
  const _maxPrice = Number(priceTo) || DEFAULT_MAX_PRICE;

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: "desc",
        },
        where: {
          ingredients: ingredientsIdArr
            ? {
                some: {
                  id: {
                    in: ingredientsIdArr,
                  },
                },
              }
            : undefined,
          items: {
            some: {
              size: {
                in: _sizes,
              },
              pizzaType: {
                in: _pizzaTypes,
              },
              price: {
                gte: _minPrice, // >=
                lte: _maxPrice, // <=
              },
            },
          },
        },
        include: {
          ingredients: true,
          items: {
            where: {
              price: {
                gte: _minPrice,
                lte: _maxPrice,
              },
            },
            orderBy: {
              price: "asc",
            },
          },
        },
      },
    },
  });

  return categories;
};
