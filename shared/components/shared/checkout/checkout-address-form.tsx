import * as React from "react";
import {
  WhiteBlock,
  Field,
  FieldGroup,
  FieldLabel,
  FormInput,
  FormTextarea,
} from "@/shared/components";

interface Props {
  loading?: boolean;
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({
  loading,
  className,
}) => {
  return (
    <WhiteBlock title="3. Адрес доставки" className={className}>
      <FieldGroup className="flex flex-col gap-5">
        <FormInput
          name="address"
          label="Адрес"
          placeholder="Укажите адрес доставки"
          required
          disabled={loading}
        />
        <FormTextarea
          name="comment"
          label="Комментарий"
          rows={5}
          placeholder="Здесь Вы можете оставить свой комментарий к заказу"
          disabled={loading}
        />
      </FieldGroup>
    </WhiteBlock>
  );
};
