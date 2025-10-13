import {
  ChoosePizzaForm,
  ChooseProductForm,
  Container,
  GroupVariants,
  PizzaImage,
  Title,
} from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { useCartStore } from "@/shared/store";
import toast from "react-hot-toast";

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  const { id } = params;

  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });
  const { addCartItem, loading } = useCartStore((state) => state);

  if (!product) {
    return notFound();
  }

  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success("Товар добавлен в корзину");
    } catch (error) {
      toast.error("Не удалось добавить товар в корзину");
      console.error(error);
    }
  };

  return (
    <Container className="flex flex-col my-10">
      {isPizzaForm ? (
        <ChoosePizzaForm
          imageUrl={product.imageUrl}
          name={product.name}
          ingredients={product.ingredients}
          items={product.items}
          onSubmit={onSubmit}
          loading={loading}
        />
      ) : (
        <ChooseProductForm
          imageUrl={product.imageUrl}
          name={product.name}
          price={firstItem.price}
          onSubmit={onSubmit}
          loading={loading}
        />
      )}
    </Container>
  );
}
