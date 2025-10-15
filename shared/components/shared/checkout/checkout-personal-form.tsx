import * as React from "react";
import { FormInput, WhiteBlock, FieldGroup } from "@/shared/components";

interface Props {
  loading?: boolean;
  className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({
  loading,
  className,
}) => {
  return (
    <WhiteBlock title="2. Персональные данные" className={className}>
      <FieldGroup className="grid grid-cols-2 gap-5">
        <FormInput
          name="firstName"
          label="Имя"
          placeholder="Иван"
          required
          disabled={loading}
        />
        <FormInput
          name="lastName"
          label="Фамилия"
          placeholder="Петров"
          required
          disabled={loading}
        />
        <FormInput
          name="email"
          label="Эл. почта"
          placeholder="example@email.com"
          required
          disabled={loading}
        />
        <FormInput
          name="phone"
          label="Номер телефона"
          placeholder="1234567890"
          required
          disabled={loading}
        />
      </FieldGroup>
    </WhiteBlock>
  );
};
