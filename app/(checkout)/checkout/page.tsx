"use client";

import {
  CheckoutItem,
  CheckoutItemDetails,
  CheckoutSidebar,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import {
  Button,
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  Input,
  Textarea,
} from "@/shared/components/ui";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { useCart } from "@/shared/hooks";
import { getCartItemDetails } from "@/shared/lib";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";

export default function CheckoutPage() {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />

      <div className="flex gap-10">
        {/* Левая часть */}
        <div className="flex flex-col flex-1 mb-20 gap-10">
          <WhiteBlock title="1. Корзина">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={getCartItemDetails(
                    item.ingredients,
                    item.pizzaType as PizzaType,
                    item.pizzaSize as PizzaSize
                  )}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  disabled={item.disabled}
                  onClickCountButton={(type) =>
                    onClickCountButton(item.id, item.quantity, type)
                  }
                  onClickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Персональные данные">
            <FieldGroup className="grid grid-cols-2 gap-5">
              <Field className="gap-2">
                <FieldLabel htmlFor="firstName" className="font-bold">
                  Имя
                </FieldLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  className="text-base"
                  placeholder="Имя"
                />
              </Field>
              <Field className="gap-2">
                <FieldLabel htmlFor="lastName" className="font-bold">
                  Фамилия
                </FieldLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  className="text-base"
                  placeholder="Фамилия"
                />
              </Field>
              <Field className="gap-2">
                <FieldLabel htmlFor="email" className="font-bold">
                  E-mail
                </FieldLabel>
                <Input
                  id="email"
                  name="email"
                  className="text-base"
                  placeholder="E-mail"
                />
              </Field>
              <Field className="gap-2">
                <FieldLabel htmlFor="phone" className="font-bold">
                  Телефон
                </FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  className="text-base"
                  placeholder="Телефон"
                />
              </Field>
            </FieldGroup>
          </WhiteBlock>

          <WhiteBlock title="3. Адрес доставки">
            <FieldGroup className="flex flex-col gap-5">
              <Field className="gap-2">
                <FieldLabel htmlFor="address" className="font-bold">
                  Адрес
                </FieldLabel>
                <Input
                  id="address"
                  name="address"
                  className="text-base"
                  placeholder="Укажите адрес доставки"
                />
              </Field>
              <Field className="gap-2">
                <FieldLabel htmlFor="comment" className="font-bold">
                  Комментарий
                </FieldLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  className="text-base"
                  rows={5}
                  placeholder="Здесь Вы можете оставить свой комментарий к заказу"
                />
              </Field>
            </FieldGroup>
          </WhiteBlock>
        </div>

        {/* Правая часть */}
        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
}
