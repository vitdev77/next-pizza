import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/shared/components";
import { cn } from "@/shared/lib";

interface Props {
  onClick?: VoidFunction;
  className?: string;
}

export const ClearButton: React.FC<Props> = ({ onClick, className }) => {
  return (
    <Button
      variant={"link"}
      size={"icon-sm"}
      onClick={onClick}
      className={cn(
        "absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600",
        className
      )}
    >
      <X />
    </Button>
  );
};
