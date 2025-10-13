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
  const sizes_ = sizes?.split(",").map(Number);
  const pizzaTypes_ = pizzaTypes?.split(",").map(Number);
  const ingredientsIdArr = ingredients?.split(",").map(Number);

  const minPrice_ = Number(priceFrom) || DEFAULT_MIN_PRICE;
  const maxPrice_ = Number(priceTo) || DEFAULT_MAX_PRICE;

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
                in: sizes_,
              },
              pizzaType: {
                in: pizzaTypes_,
              },
              price: {
                gte: minPrice_, // >=
                lte: maxPrice_, // <=
              },
            },
          },
        },
        include: {
          ingredients: true,
          items: {
            where: {
              price: {
                gte: minPrice_,
                lte: maxPrice_,
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
