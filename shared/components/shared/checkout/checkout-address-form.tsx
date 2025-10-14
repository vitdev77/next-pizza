import * as React from "react";
import { WhiteBlock } from "..";
import { Field, FieldGroup, FieldLabel, Input, Textarea } from "../../ui";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Адрес доставки" className={className}>
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
  );
};
