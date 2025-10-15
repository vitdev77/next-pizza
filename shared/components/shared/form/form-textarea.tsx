"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldLabel,
  Textarea,
  ClearButton,
  RequiredSymbol,
} from "@/shared/components";
import { cn } from "@/shared/lib";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormTextarea: React.FC<Props> = ({
  name,
  label,
  required,
  className,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <Field className="gap-2">
      {label && (
        <FieldLabel
          htmlFor={name}
          className={cn("font-bold", { "gap-1": required }, className)}
        >
          {label}
          {required && <RequiredSymbol />}
        </FieldLabel>
      )}
      <div className="relative">
        <Textarea id={name} {...register(name)} {...props} />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
      {errorText && <FieldError>{errorText}</FieldError>}
    </Field>
  );
};
