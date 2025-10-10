import * as React from "react";
import { cn } from "@/shared/lib/utils";
import { CountIconButton } from "@/shared/components/shared";

export interface CountButtonProps {
  value?: number;
  size?: "sm" | "lg";
  onClick?: (type: "plus" | "minus") => void;
  className?: string;
}

export const CountButton: React.FC<CountButtonProps> = ({
  className,
  onClick,
  value = 1,
  size = "sm",
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-between gap-3",
        className
      )}
    >
      <CountIconButton
        onClick={() => onClick?.("minus")}
        disabled={value === 1}
        size={size}
        type="minus"
      />

      <b className={size === "sm" ? "text-sm" : "text-base"}>{value}</b>

      <CountIconButton
        onClick={() => onClick?.("plus")}
        size={size}
        type="plus"
      />
    </div>
  );
};
