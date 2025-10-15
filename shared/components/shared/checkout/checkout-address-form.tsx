// "use client";

import * as React from "react";
import {
  WhiteBlock,
  Field,
  FieldGroup,
  FieldLabel,
  FormInput,
  FormTextarea,
} from "@/shared/components";
// import { AddressInput } from "../address-input";
// import { Controller, useFormContext } from "react-hook-form";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  // const { control } = useFormContext();

  return (
    <WhiteBlock title="3. Адрес доставки" className={className}>
      <FieldGroup className="flex flex-col gap-5">
        <FormInput
          name="address"
          label="Адрес"
          placeholder="Укажите адрес доставки"
          required
        />

        {/* <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AddressInput onChange={field.onChange} />
              {fieldState.error?.message && (
                <p className="text-red-500 text-sm">
                  {fieldState.error.message}
                </p>
              )}
            </>
          )}
        /> */}

        <FormTextarea
          name="comment"
          label="Комментарий"
          rows={5}
          placeholder="Здесь Вы можете оставить свой комментарий к заказу"
        />
      </FieldGroup>
    </WhiteBlock>
  );
};
